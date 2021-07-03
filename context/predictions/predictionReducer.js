import {
  SET_PREDICTED_SALARY,
  CLEAR_SALARY,
  SET_PREDICTED_JOB_STATUS,
} from "./predictionTypes";
import Cookie from "js-cookie";

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_PREDICTED_SALARY:
      return {
        ...state,
        predictedSalary: action.payload,
      };
    case SET_PREDICTED_JOB_STATUS:
      return {
        ...state,
        predictedJobStatus: action.payload,
      };
    case CLEAR_SALARY:
      return {
        predictedSalary: null,
      };
    default:
      return state;
  }
};

export default authReducer;
