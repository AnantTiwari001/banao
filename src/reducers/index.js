import * as actionType from "./../helpers/constants";
const initialState = {
  about: null,
  services: {}, 
  team: null,
  media: null,
  showMobileNav: false,
  activeNav: "",
  works: "",
  contacts: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ABOUT:
      return { ...state, about: action.payload };
    case actionType.GET_SERVICES:
      return { ...state, services: action.payload };
    case actionType.GET_TEAM:
      return { ...state, team: action.payload };
    case actionType.GET_MEDIA:
      return { ...state, media: action.payload };
    case actionType.GET_MOBILE_NAV:
      return { ...state, showMobileNav: action.payload };
    case actionType.GET_ACTIVE_NAV:
      return { ...state, activeNav: action.payload };
    case actionType.GET_WORKS:
      return { ...state, works: action.payload };
    case actionType.GET_CONTACTS_INFO:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};
export default reducer;
