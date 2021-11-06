import React from "react";

const RoleCard = ({ role }) => {
  return (
    <div className="bg-white h-auto rounded-lg p-3 text-primary flex flex-col">
      <div>
        <h2 className="text-2xl font-bold">{role.title}</h2>
      </div>
      <div className="w-full mt-3 border-b-2 border-primary"></div>

      <div className="mt-3">
        <div className="flex mt-3">
          <div className="rounded-2xl w-1/4 bg-blue-300 text-white  text-sm p-1 font-bold flex mr-3 items-center justify-center ">
            {role.contract_time}
          </div>
        </div>
      </div>
      <div className="flex mt-3">
        <p className="font-bold mr-3">Location</p>
        <p>{role.location}</p>
      </div>

      <div className="flex mt-3">
        <p className="font-bold mr-3">Company</p>
        <p>{role.company}</p>
      </div>
      {/* 
      <div className="flex mt-3">
        <p className="font-bold mr-3">Phone</p>
        <p>{role.phone}</p>
      </div> */}

      <div className="flex mt-3">
        <p className="font-bold mr-3">Age</p>
        <p>19</p>
      </div>

      <div className="mt-3">
        <p className="font-bold mr-3">Description</p>
        <p className="mt-3">{role.description}</p>
      </div>

      <div className="flex w-full my-auto ">
        <a
          href={role.link}
          type="submit"
          target="__blank"
          className="h-14 w-2/5 rounded-lg mt-12 mx-auto flex items-center justify-center text-white bg-primary"
        >
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default RoleCard;
