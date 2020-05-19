import store from "../store";
import { START_CALL, END_CALL, SUCCESS_CALL, UPDATE_STATE } from "../types";

export const updateSIP = (sipState) => (dispatch) => {
  dispatch({
    type: UPDATE_STATE,
    payload: sipState,
  });
};
