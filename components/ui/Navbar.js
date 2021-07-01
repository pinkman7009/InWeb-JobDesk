import React from "react";
import Link from "next/link";

const Navbar = () => {
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
