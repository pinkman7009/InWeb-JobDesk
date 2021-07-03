import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./authTypes";
import Cookie from "js-cookie";

const AuthState = (props) => {
  const initialState = {
    token: Cookie.get("token") ? Cookie.getJSON("token") : "",
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    role: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //   Load User
  const loadUser = async () => {
    // @todo - load token into global headers
    const config = {
      headers: {
        Authorization: `Bearer ${Cookie.getJSON("token")}`,
      },
    };

    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/auth/me",
        config
      );

      dispatch({
        type: USER_LOADED,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Register User
  const register = async (formdata) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        formdata,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.error,
      });
    }
  };

  // Login User
  const login = async (formdata) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        formdata,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.error,
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        role: state.role,
        register,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
