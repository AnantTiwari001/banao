import * as actionType from "./../helpers/constants";
const api = "https://admin.awcapitalltd.com";

export const getAbout = () => (dispatch) => {
  try {
    fetch(`${api}/api/about-us`)
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({ type: actionType.GET_ABOUT, payload: data });
        },
        (error) => {}
      );
  } catch (error) {}
};
export const getServices = () => (dispatch) => {
  try {
    fetch(`${api}/api/services`)
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({ type: actionType.GET_SERVICES, payload: data });
        },
        (error) => {}
      );
  } catch (error) {}
};

export const getWorks = () => (dispatch) => {
  try {
    fetch(`${api}/api/our-work`)
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({ type: actionType.GET_WORKS, payload: data });
        },
        (error) => {}
      );
  } catch (error) {}
};
export const getTeam = () => (dispatch) => {
  try {
    fetch(`${api}/api/team-member`)
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log(data);
          dispatch({ type: actionType.GET_TEAM, payload: data });
        },
        (error) => {}
      );
  } catch (error) {}
};
export const setNav = (data) => (dispatch) => {
  dispatch({ type: actionType.GET_MOBILE_NAV, payload: data });
};

export const setActiveNav = (data) => (dispatch) => {
  dispatch({ type: actionType.GET_ACTIVE_NAV, payload: data });
};

export const getMedia = () => (dispatch) => {
  try {
    fetch(`${api}/api/media`)
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log(data);
          dispatch({ type: actionType.GET_MEDIA, payload: data });
        },
        (error) => {}
      );
  } catch (error) {}
};
export const getContacts = () => (dispatch) => {
  try {
    fetch(`${api}/api/contact`)
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({ type: actionType.GET_CONTACTS_INFO, payload: data });
        },
        (error) => {}
      );
  } catch (error) {}
};
