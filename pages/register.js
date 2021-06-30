import Head from "next/head";
import student from "../public/student.png";
import recruiter from "../public/recruiter.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function register() {
  const [page, setPage] = useState(1);
  const [role, setRole] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [age, setAge] = useState(null);

  const handleSubmit = () => {
    const user = {
      email,
      password,
      phone,
      company,
      age,
    };

    console.log("user is", user);
  };
  const roleSelect = () => {
    return (
      <div className="h-4/5 flex flex-col justify-between items-center">
        <h2 className="text-xl text-primary mt-12">Select Role</h2>
        <div className="flex w-4/5 mx-auto justify-between items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              setPage(2);
              setRole("STUDENT");
            }}
          >
            <Image src={student} width={180} height={150} />
            <p className="text-lg text-primary text-center mt-6">
              Looking for a job
            </p>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              setPage(2);
              setRole("RECRUITER");
            }}
          >
            <Image src={recruiter} width={180} height={150} />
            <p className="text-lg text-primary text-center mt-6">Recruiter</p>
          </div>
        </div>

        <div className="mt-12 cursor-pointer hover:underline">
          <Link href="/">
            <p className="text-center">Existing User? Log In</p>
          </Link>
        </div>
      </div>
    );
  };

  const registerForm = () => {
    return (
      <>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => {
            setPage(1);
          }}
        >
          Back
        </p>
        <form action="" className="mt-6" onSubmit={handleSubmit}>
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
          <div className="w-4/5 mx-auto mt-6">
            <label>Phone Number</label>
            <input
              className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          {role === "STUDENT" ? (
            <div className="w-4/5 mx-auto mt-6">
              <label>Age</label>
              <input
                className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
          ) : (
            <div className="w-4/5 mx-auto mt-6">
              <label>Company</label>
              <input
                className="w-full h-16 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
          )}

          <button
            type="submit"
            className="h-14 w-1/3 rounded-lg mt-12 mx-auto flex items-center justify-center text-white bg-primary"
          >
            Sign Up
          </button>
        </form>
      </>
    );
  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-900  to-cyan-400 min-h-screen w-screen flex items-center justify-center">
        <div className="w-4/5 h-full mx-auto flex justify-center items-center">
          <div className="bg-white my-6 sm:w-full lg:w-3/5 h-auto 2xl:w-2/5 rounded-lg p-6 ">
            <h3 className="text-3xl text-center mt-6">Register</h3>
            {page === 1 ? roleSelect() : registerForm()}
          </div>
        </div>
      </div>
    </>
  );
}
