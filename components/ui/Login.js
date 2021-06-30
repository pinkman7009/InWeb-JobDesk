import React, { useState } from "react";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-white 2xl:h-4/5 sm:h-auto lg:w-2/5 sm:w-full rounded-lg p-6 ">
      <h3 className="text-3xl text-center mt-6">Log In</h3>

      <form action="" className="mt-16" onSubmit={handleSubmit}>
        <div className="w-4/5 mx-auto mt-6">
          <label>Email</label>
          <input
            className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-4/5 mx-auto mt-6">
          <label>Password</label>
          <input
            className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
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
