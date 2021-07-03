import React, { useContext, useEffect } from "react";
import Link from "next/link";
import AuthContext from "../../context/auth/authContext";
import PredictionContext from "../../context/predictions/predictionContext";

import { useRouter } from "next/router";
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const predictionContext = useContext(PredictionContext);

  const { role, logout, isAuthenticated } = authContext;
  const { clearPredictedSalary } = predictionContext;
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return (
    <>
      <nav className=" flex flex-wrap items-center  px-3 py-5 bg-transparent mb-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  flex  lg:w-auto">
            <Link href="/home">
              <span className="cursor-pointer font-logo inline-block pt-5 px-8 whitespace-nowrap text-white text-5xl">
                JobDesk
              </span>
            </Link>
          </div>

          <ul className="flex flex-col lg:flex-row list-none">
            {role && role[0] === "STUDENT" ? (
              <>
                {" "}
                <li className="nav-item">
                  <Link href="/home">
                    <span className="cursor-pointer px-10 pt-10 flex items-center text-xl text-white hover:opacity-75">
                      Jobs
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/salary">
                    <span className="cursor-pointer px-10 pt-10 flex items-center text-xl text-white hover:opacity-75">
                      Salary Prediction
                    </span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item">
                  <Link href="/recruiterHome">
                    <span className="cursor-pointer px-10 pt-10 flex items-center text-xl text-white hover:opacity-75">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/recruiterAdd">
                    <span className="cursor-pointer px-10 pt-10 flex items-center text-xl text-white hover:opacity-75">
                      Add Job
                    </span>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <a
                onClick={() => {
                  logout();
                  clearPredictedSalary();
                }}
              >
                <span className="cursor-pointer px-10 pt-10 flex items-center text-xl text-white hover:opacity-75">
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
