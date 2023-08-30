import React from "react";
import StarIcon from "../Assets/svgicon/icon-star.svg";

const Rate = () => {
  return (
    <div className=" flex flex-col ">
      <div className=" h-16 bg-fuchsia-100 w-96 p-4 font-bold text-fuchsia-900 text-center mb-2 rounded-lg">
        <img src={StarIcon} alt="StarIcon" className="w-4" />
        Rated 5 Stars in Reviews
      </div>
      <div className=" h-16 w-96 bg-fuchsia-100 p-4 font-bold text-fuchsia-900 text-center mb-2 rounded-lg">
        <img src={StarIcon} alt="StarIcon" className="w-4 " />
        Rated 5 Stars in Report Guru
      </div>
      <div className=" h-16 w-96 bg-fuchsia-100 p-4 font-bold text-fuchsia-900 text-center mb-2 rounded-lg">
        <img src={StarIcon} alt="StarIcon" className="w-4" />
        Rated 5 Stars in BestTech
      </div>
    </div>
  );
};

export default Rate;
