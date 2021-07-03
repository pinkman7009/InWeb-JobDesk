import Head from "next/head";
import student from "../public/student.png";
import recruiter from "../public/recruiter.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { useRouter } from "next/router";

export default function register() {
  const [page, setPage] = useState(1);
  const [roleField, setRoleField] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [age, setAge] = useState(null);
  const [fields, setFields] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const authContext = useContext(AuthContext);

  const { register, error, isAuthenticated, role } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      if (role[0] === "STUDENT") router.push("/salary");
      else router.push("/recruiterHome");
    }

    if (error) setErrorMessage(error);
  }, [isAuthenticated, error]);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (roleField === "STUDENT") {
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        age === "" ||
        fields === "" ||
        description === "" ||
        jobType === "" ||
        phone === ""
      )
        setErrorMessage("Please enter all fields");
      else {
        const user = {
          name,
          email,
          password,
          phone,
          company,
          age,
          role: roleField,
          jobType,
          fields,
          description,
        };
        register(user);
        setName("");
        setEmail("");
        setPassword("");
        setCompany("");
        setPhone("");
        setAge("");
        setFields("");
        setDescription("");
        setJobType("");
        setRoleField("");
        setErrorMessage("");
      }
    } else {
      if (email === "" || password === "" || company === "" || phone === "")
        setErrorMessage("Please enter all fields");
      else {
        const user = {
          name,
          email,
          password,
          phone,
          company,
          role: roleField,
        };
        register(user);
        setName("");
        setEmail("");
        setPassword("");
        setCompany("");
        setPhone("");
        setAge("");
        setFields("");
        setDescription("");
        setJobType("");
        setRoleField("");
        setErrorMessage("");
      }
    }
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
              setRoleField("STUDENT");
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
              setRoleField("RECRUITER");
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
          className="cursor-pointer h-8 w-1/5 rounded-lg flex items-center justify-center text-white bg-grey"
          onClick={() => {
            setPage(1);
          }}
        >
          Back
        </p>
        <div className="w-full flex justify-center items-center">
          {errorMessage && (
            <p className="text-red text-lg mt-6">{errorMessage}</p>
          )}
        </div>
        <form action="" className="mt-6">
          <div className="w-4/5 mx-auto mt-6">
            <label className="text-primary">Name</label>
            <input
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="w-4/5 mx-auto mt-6">
            <label className="text-primary">Email</label>
            <input
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-4/5 mx-auto mt-6">
            <label className="text-primary">Password</label>
            <input
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="w-4/5 mx-auto mt-6">
            <label className="text-primary">Phone Number</label>
            <input
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          {roleField === "STUDENT" ? (
            <div className="w-4/5 mx-auto mt-6">
              <br />
              <label className="text-primary">Age</label>
              <input
                className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
              <br />
              <br />
              <label className="text-primary">Looking for</label>
              <input
                type="radio"
                id="internship"
                value="Internship"
                name="work"
                onChange={(e) => setJobType(e.target.value)}
                className="mx-1"
              />
              <label for="internship mt-3">Internship</label>

              <input
                type="radio"
                id="fulltime"
                value="Full-time"
                name="work"
                className="mx-1"
                onChange={(e) => setJobType(e.target.value)}
              />
              <label for="fulltime">Full Time</label>
              <input
                type="radio"
                id="parttime"
                value="Part-time"
                name="work"
                className="mx-1"
                onChange={(e) => setJobType(e.target.value)}
              />
              <label for="parttime">Part Time</label>
              <br />
              <br />
              <label className="text-primary">Fields Intrested</label>
              <input
                className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
                type="text"
                value={fields}
                onChange={(e) => setFields(e.target.value)}
                required
              />
              <br />
              <br />
              <label className="text-primary mt-3">
                Write about your skills and experience (In not more than 50
                words)
              </label>
              <textarea
                className="w-full focus:outline-none focus:bg-white h-18 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          ) : (
            <div className="w-4/5 mx-auto mt-6">
              <label className="text-primary">Company Name</label>
              <input
                className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
          )}

          <button
            onClick={handleSignUp}
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
