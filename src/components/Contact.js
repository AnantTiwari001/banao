import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, setActiveNav } from "../actions";
import location from "../assets/contact/location.svg";
import message from "../assets/contact/message.svg";
import "../css/contact.css";

function Contact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [contactInfo, setContactInfo] = useState(undefined)
  const contact_info = useSelector((state) => state.contacts);
  const [validateError, setValidateError] = useState({ name: '', mail: '', content: '' })
  const [bannerData, setBannerData]= useState({
      type: "",
      h1text: "",
      h2text: "",
      image: ""
  })

  const ErrorStatement = {
    name: 'Enter a valid name',
    mail: 'Enter a valid email.',
    content: 'Please enter a larger message!'
  }

  useEffect(() => {
    // banner Api
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://admin.awcapitalltd.com/api/bannerimages/ContactUs/", requestOptions)
      .then(response => response.text())
      .then(result => setBannerData(JSON.parse(result).data[0]))
      .catch(error => console.log('error', error));


    dispatch(getContacts());
    dispatch(setActiveNav(""));
    fetch(`https://admin.awcapitalltd.com/api/contactus`)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data['company info']);
          setContactInfo(data)
        })
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsSent(true);
    console.log(`name: ${name} mail: ${mail} content: ${content}`)
    const postObj = JSON.stringify({ contact_name: name, contact_email: mail, contact_message: content });
    fetch("https://admin.awcapitalltd.com/api/contactus/", { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: postObj, redirect: 'follow' })
      .then(response => response.text())
      .then(result => { console.log('result: ', result); setIsSent(true) })
      .catch(error => console.log('error', error));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='contact-container main-font'>
      <div className='contact-info' style={{backgroundImage: `url(${bannerData.image})`}}>
        <div className='contact-info-overlay'>
          <div className='contact-info-content'>
            <h1>Get in touch</h1>
            <div className='contact-top-padding'>
              <div className='flex-info'>
                <img
                  loading='lazy'
                  src={message}
                  alt='message'
                  className='contact-icons'
                />
                <div className='flex-info-text'>
                  <p className='main'>
                    Email

                  </p>
                  <p>{contactInfo ? contactInfo['company info'][0]?.heading : 'Our friendly team is here to help'}.</p>
                  <div className='flex-info-sub-text'>
                    <p>
                      {
                        contactInfo &&
                        <a style={{ textDecoration: 'none', color: 'inherit' }} href={`mailto:${contactInfo['company info'][0]?.mail_id}`}>
                          {contactInfo && contactInfo["company info"][0]?.mail_id}
                        </a>
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex-info contact-top-padding'>
                <img
                  loading='lazy'
                  src={location}
                  alt='message'
                  className='contact-icons'
                />
                <div className='flex-info-text'>
                  <p className='main'>Office</p>
                  <p>Come say hello at our office HQ</p>
                  <div className='flex-info-sub-text'>
                    <p style={{fontWeight:550}}>Address 1 - {' '}
                      {contactInfo &&
                        contactInfo["company info"][0]?.address_id_1}
                    </p>
                    <p style={{fontWeight:550}}>Address 2 - {' '}
                      {contactInfo &&
                        contactInfo["company info"][0]?.address_id_2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-form'>
        <div className='contact-form-container'>
          <h1 style={{ fontWeight: 700, fontSize: "34px" }}>Write to us! </h1>

          <p className='contact-form-container-text'>

          </p>
          <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <p

              className='form-text'
            >
              Name
            </p>
            <input
              className='input-class'
              type='text'
              name=''
              id=''
              placeholder='Your Name'
              value={name}
              onChange={(e) => { setName(e.target.value); (e.target.value.length < 3) ? setValidateError({ ...validateError, name: ErrorStatement.name }) : setValidateError({ ...validateError, name: '' }); console.log('constact info', contactInfo) }}
            />
            <p className="error-msg">{validateError.name}</p>
            <p className='form-text'>Email</p>
            <input
              className='input-class'
              type='text'
              name=''
              id=''
              placeholder='you@name.com'
              value={mail}
              onChange={(e) => { setMail(e.target.value); (e.target.value.endsWith('.com') || e.target.value.endsWith('.in') || e.target.value.endsWith('.edu')) ? setValidateError({ ...validateError, mail: '' }) : setValidateError({ ...validateError, mail: ErrorStatement.mail }) }}
            />
            <p className="error-msg">{validateError.mail}</p>
            <p className='form-text'>How Can We Help You?</p>
            <textarea
              name=''
              className='input-class'
              placeholder='Tell us about .....'
              id=''
              cols='30'
              rows='10'
              value={content}
              onChange={(e) => { setContent(e.target.value); (e.target.value.length < 10) ? setValidateError({ ...validateError, content: ErrorStatement.content }) : setValidateError({ ...validateError, content: '' }) }}
            ></textarea>
            <p className="error-msg">{validateError.content}</p>
            {isSent ? (
              <p className='contact-message'>Message Sent</p>
            ) : (
              <button>Send </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
