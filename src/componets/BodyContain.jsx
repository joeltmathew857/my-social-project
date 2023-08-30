import React from "react";
import Description from "./Description"; // Corrected path
import Rate from "./Rate"; // Corrected path
import Backgroundimg from "../Assets/svgicon/bg-pattern-top-desktop.svg";
import BoxContainer from "./BoxContainer"; // Corrected path

const BodyContain = () => {
  return (
    <div className=" flex justify-center items-center h-screen p-8  h-full w-full p-8 ">
      <div className="flex flex-row ">
        <div>
          <Description />
        </div>
        <div>
          <Rate />
        </div>
      </div>
      <BoxContainer />
    </div>
  );
};

export default BodyContain;
