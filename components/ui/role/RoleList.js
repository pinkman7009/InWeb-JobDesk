import React, { useState, useEffect } from "react";
import RoleCard from "./RoleCard";
import axios from "axios";
import Cookie from "js-cookie";

const RoleList = () => {
  const [roles, setRoles] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      const token = Cookie.getJSON("token");

      const res = await axios.get("http://localhost:8000/api/v1/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRoles(res.data.job);
    };

    fetchRoles();
  }, []);
  return (
    <div className="grid grid-cols-3 mt-12 grid gap-6 sm:w-full lg:w-4/5 2xl:w-4/5 mx-auto h-auto">
      {roles.length === 0 ? (
        <p className="mx-auto text-xl text-white">No results found</p>
      ) : (
        roles?.map((role) => <RoleCard key={role.id} role={role} />)
      )}
    </div>
  );
};

export default RoleList;
