import React from "react";
import Articleimg from "../Assets/ARTICLEimg/avatar-michelle.jpg";
import ArticleDraw from "../Assets/ARTICLEimg/drawers.jpg";
import Shareicon from "../Assets/svgicon/icon-share.svg";

const ArticlePreview = () => {
  return (
    <div className="box h-full w-auto relative p-8 justify-center  flex items-center h-screen bg-slate-300 ">
      <div className="flex flex-row ">
        <img
          src={ArticleDraw}
          alt=""
          className="object-cover h-80 w-80 rounded-lg "
        />
        <div className="p-8 bg-white h-80 w-1/3 rounded-lg">
          <div className="font-semibold text-2xl text-slate-500">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </div>
          <div className="text-slate-500 ">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </div>
          <div className="flex items-center ">
            <img src={Articleimg} alt="" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <div>Michelle Appleton</div>
              <div className="text-gray-400">28 Jun 2020</div>
            </div>
            <div>
              <img
                src={Shareicon}
                alt="Shareicon"
                className="box-border ml-32 w-12 h-12 hover:bg-gray-700  text-gray-800 bg-gray-300 text-center p-4 border-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
