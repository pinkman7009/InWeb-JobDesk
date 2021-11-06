import Head from "next/head";
import Login from "../components/ui/Login";
import login from "../public/login.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-900  to-cyan-400 h-screen w-screen">
        <div className="w-4/5 h-full mx-auto flex lg:flex-row sm:flex-col justify-center items-center">
          <Login />
          <div className="h-4/5 lg:w-1/2 sm:w-full flex flex-col items-center justify-evenly text-white">
            <div>
              <h2 className="font-logo text-6xl mb-6 text-center">JobDesk</h2>

              <p className="text-lg">Make the most of your professional life</p>
            </div>

            <Image height="500" width="600" src={login} alt="login-pic" />
          </div>
        </div>
      </div>
    </>
  );
}
