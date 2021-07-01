import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="flex justify-center items-center mt-12 w-4/5 mx-auto">
      <BeatLoader
        loading={loading}
        size={30}
        color="#ffffff"
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};

export default Loader;
