import React, { useLayoutEffect } from "react";
import "../css/privacy.css";

function Privacy() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="body main-font">
      <div className="privacy__banner">
        <div className="banner-about">
          <div className="privacy__banner-title">We are a&w capital</div>
          <div className="banner-content">
            Investment banking firm focusing on the sports, gaming and media
            markets between India and the West. Identifying and servicing cross
            border opportunities between India and the international markets,
            particularly the UK and Western Europe.
          </div>
        </div>
      </div>
      <div className="privacy__content__container">
        <h1 className="privacy__title">Privacy Policy</h1>
        <div className="privacy__content">
          <h1 className="privacy__content__title">Who are we?</h1>
          <div className="privacy__content__text">
            <p>We are A&W Capital ltd and can be contacted</p>
            <p>on the below contact</p>
            <p>details: Email: info@awcapitalltd.com</p>
            <p>Telephone: +44 203 971 0753</p>
            <p>Address: 67/68 JERMYN STREET, LONDON, SW1Y 6NY</p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            Why do we collect and use your personal information
          </h1>
          <div className="privacy__content__text">
            <p>
              We collect and use your personal information in order for us to
              manage your enquiry and provide you
            </p>
            <p>
              with information about our products/services that you have
              enquired about.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            What happens if I do not provide my personal information
          </h1>
          <div className="privacy__content__text">
            <p>
              We need your personal information in order to provide you
              information about our products/services. If
            </p>
            <p>
              we do not collect your personal information we will not be able to
              provide our services to you.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            How we protect your information
          </h1>
          <div className="privacy__content__text">
            <p>
              Your data is securely password protected and securely held on a
              server. Our website server is
            </p>
            <p>
              protected and regularly scanned for malware and viruses. We do not
              store any credit/debit card
            </p>
            <p>details.</p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            Who will we share your personal information with
          </h1>
          <div className="privacy__content__text">
            <p>
              We will not pass your personal information onto any third parties.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            Transferring your personal information outside Europe
          </h1>
          <div className="privacy__content__text">
            <p>
              We will not share your personal information with organisations
              based outside Europe.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            How long will we store your personal information
          </h1>
          <div className="privacy__content__text">
            <p>
              We will store your personal information for up to one month if you
              do not decide to proceed with{" "}
            </p>
            <p>
              {" "}
              our services and do not opt-in to receive marketing information
              from us. If you do become a{" "}
            </p>
            <p>
              customer/client of ours, we will store your data for up to one
              year from the date of the latest{" "}
            </p>
            <p>
              purchase of our services. If you do choose to opt into our
              marketing, we will continue to contact you
            </p>{" "}
            <p>
              via email until you opt out. All of our emails contain an
              unsubscribe link.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            What are your rights in relation to your personal information
          </h1>

          <div className="privacy__content__text">
            <p>Right to access</p>
            <p>
              You have the right to request copies of the personal information
              we hold about you at any time.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>Right to rectification</p>
            <p>
              You have the right to request that we correct any inaccurate
              personal information we hold about you.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>Right to erasure</p>
            <p>
              You have the right to request that we delete your personal
              information from our records.
            </p>
            <p>
              Please note that we will not be able to delete your personal
              information whilst we are still providing
            </p>
            <p>
              {" "}
              our services to you. We will be able to delete your personal
              information once you cancel the service
            </p>
            <p>or once the service is completed.</p>
          </div>
          <div className="privacy__content__text">
            <p>Right to restrict processing</p>
            <p>
              You have the right to request that we restrict how we use your
              personal information.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>Right to object</p>
            <p>
              You have the right to object to the collection and use of your
              personal information at any time.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>Right to data portability</p>
            <p>
              You have the right to obtain a copy of your personal information
              in a legible and compatible format
            </p>
            <p>such as Excel or Word.</p>
          </div>
          <div className="privacy__content__text">
            <p>Right to withdraw consent</p>

            <p>
              You have the right to withdraw your consent for us to use your
              personal information to send
            </p>
            <p>
              marketing information to you. Each marketing email that we send
              you will include a link which you
            </p>
            <p>can follow to opt-out of future marketing.</p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            How can I exercise my rights in relation to my personal information
          </h1>
          <div className="privacy__content__text">
            <p>
              You can exercise all of your rights by contacting us on any of the
              above contact details.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            How do I lodge a complaint about the use of my personal information
          </h1>
          <div className="privacy__content__text">
            <p>
              You can lodge a complaint with us directly by contacting us on one
              of the above contact details.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">
            How do I lodge a complaint about the use of my personal information
          </h1>
          <div className="privacy__content__text">
            <p>
              You can lodge a complaint with us directly by contacting us on one
              of the above contact details.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>
              You also have the right to lodge a complaint directly with the
              Information Commissioner’s Office
            </p>
            <p>
              (ICO). The ICO are the regulator who makes sure that we use your
              personal information in a lawful
            </p>
            <p>way.</p>
          </div>
          <div className="privacy__content__text">
            <p>
              You can lodge a complaint with the ICO by following this link:
              https://ico.org.uk/concerns/ or
            </p>
            <p>calling the ICO on 0303 123 1113.</p>
          </div>
        </div>
        <div className="privacy__content">
          <h1 className="privacy__content__title">Do we use ‘cookies’?</h1>

          <div className="privacy__content__text">
            <p>
              Yes. Cookies are small files that a site or its service provider
              transfers to your computer’s hard drive
            </p>
            <p>
              through your Web browser (if you allow) that enables the site’s or
              service provider’s systems to
            </p>
            <p>
              {" "}
              recognize your browser and capture and remember certain
              information. For instance, we use cookies{" "}
            </p>
            <p>
              {" "}
              to help us remember and process the items in your shopping cart.
              They are also used to help us
            </p>
            <p>
              {" "}
              understand your preferences based on previous or current site
              activity, which enables us to provide
            </p>
            <p>
              {" "}
              you with improved services. We also use cookies to help us compile
              aggregate data about site traffic
            </p>
            <p>
              {" "}
              and site interaction so that we can offer better site experiences
              and tools in the future.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>
              We use cookies to:Save your browsing analytical data of our
              website. Via Google analytics.You can
            </p>
            <p>
              choose to have your computer warn you each time a cookie is being
              sent, or you can choose to turn
            </p>
            <p>
              {" "}
              off all cookies. You do this through your browser settings. Since
              browser is a little different, look at
            </p>
            <p>
              {" "}
              your browser’s Help Menu to learn the correct way to modify your
              cookies.
            </p>
          </div>
          <div className="privacy__content__text">
            <p>
              If you turn cookies off, some features will be disabled. It won’t
              affect the user’s experience that make
            </p>
            <p>
              your site experience more efficient and may not function properly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Privacy;
