import { START_CALL, END_CALL, SUCCESS_CALL } from "../types";

const initialState = {
  host: "sip.reper.io",
  port: 5065,
  pathname: "/ws",
  user: "",
  password: "",
  autoRegister: true,
  autoAnswer: false, // automatically answer incoming calls; false by default
  iceRestart: false, // force ICE session to restart on every WebRTC call; false by default
  sessionTimersExpires: 120, // value for Session-Expires header; 120 by default
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
  ],
  debug: false,
  connect_pending: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_CALL:
      return {
        ...state,
        connect_pending: true,
      };
    case SUCCESS_CALL:
      return {
        ...state,
        connect_pending: false,
      };
    default:
      return state;
  }
}
