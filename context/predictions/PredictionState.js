import React, { useReducer } from "react";
import axios from "axios";
import PredictionContext from "./predictionContext";
import predictionReducer from "./predictionReducer";
import {
  SET_PREDICTED_SALARY,
  CLEAR_SALARY,
  SET_PREDICTED_JOB_STATUS,
} from "./predictionTypes";
import Cookie from "js-cookie";

const PredictionState = (props) => {
  const initialState = {
    predictedSalary: null,
    predictedJobStatus: null,
  };

  const [state, dispatch] = useReducer(predictionReducer, initialState);

  const fetchPredictedSalary = async (formData) => {
    const res = await axios.post("http://0.0.0.0:5000/api", formData);

    console.log("predicted data is", res.data);

    const predicted = res.data.prediction.replace("[", "");
    const predicted2 = predicted.replace("]", "");

    dispatch({
      type: SET_PREDICTED_SALARY,
      payload: predicted2,
    });
  };

  const fetchSalaryWithJobDescription = async (data) => {
    console.log("predicted data is", res.data);

    dispatch({
      type: SET_PREDICTED_JOB_STATUS,
      payload: res.data,
    });
  };

  const clearPredictedSalary = () => {
    dispatch({
      type: CLEAR_SALARY,
    });
  };

  return (
    <PredictionContext.Provider
      value={{
        predictedSalary: state.predictedSalary,
        predictedJobStatus: state.predictedJobStatus,
        fetchPredictedSalary,
        clearPredictedSalary,
        fetchSalaryWithJobDescription,
      }}
    >
      {props.children}
    </PredictionContext.Provider>
  );
};

export default PredictionState;
