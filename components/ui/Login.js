import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

import AuthContext from "../../context/auth/authContext";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const authContext = useContext(AuthContext);

  const router = useRouter();

  const { login, isAuthenticated, role, error } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      if (role[0] === "STUDENT") router.push("/salary");
      else router.push("/recruiterHome");
    }

    if (error) setErrorMessage(error);
  }, [isAuthenticated, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (email === "" || password === "")
      setErrorMessage("Please enter all fields");
    else {
      login({
        email,
        password,
      });
      setErrorMessage("");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-white 2xl:h-4/5 sm:h-auto lg:w-2/5 sm:w-full rounded-lg p-6 ">
      <h3 className="text-3xl text-center mt-6">Log In</h3>

      <div className="w-full flex justify-center items-center">
        {errorMessage && (
          <p className="text-red text-lg mt-6">{errorMessage}</p>
        )}
      </div>

      <form action="" className="mt-16" onSubmit={handleSubmit}>
        <div className="w-4/5 mx-auto mt-6">
          <label>Email</label>
          <input
            className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg focus:outline-none focus:bg-white"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-4/5 mx-auto mt-6">
          <label>Password</label>
          <input
            className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg focus:outline-none focus:bg-white"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          type="submit"
          className="h-14 w-1/3 rounded-lg mt-12 mx-auto flex items-center justify-center text-white bg-primary"
        >
          Sign In
        </button>
      </form>

      <div className="mt-12 cursor-pointer hover:underline">
        <Link href="/register">
          <p className="text-center">New User? Register here</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
