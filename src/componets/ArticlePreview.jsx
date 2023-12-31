import React, { useRef, useState, useEffect } from "react";
import Articleimg from "../Assets/ARTICLEimg/avatar-michelle.jpg";
import ArticleDraw from "../Assets/ARTICLEimg/drawers.jpg";
import Shareicon from "../Assets/svgicon/icon-share.svg";
import SharePopup from "./SharePopup";

const ArticlePreview = () => {
  const [popVisible, setPopVisible] = useState(false);
  const popoverRef = useRef(null);

  const togglePopUp = () => {
    setPopVisible(!popVisible);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!popoverRef.current || !popoverRef.current.contains(e.target)) {
        setPopVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [popoverRef]);

  const handleTriggerClick = (e) => {
    e.stopPropagation();
    togglePopUp();
  };

  return (
    <div className="contain-box flex relative justify-center items-center h-screen bg-slate-300">
      <div className="box flex flex-row bg-white rounded-xl">
        <img
          src={ArticleDraw}
          alt=""
          className="object-cover sm:h-80 w-80 rounded-lg sm:rounded-t-xl"
        />
        <div className="description p-4 bg-white border border-white h-80 w-96 rounded-lg relative sm:rounded-b-none md:w-96">
          <div className="font-semibold text-2xl text-slate-500">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </div>
          <div className="text-slate-500 py-4">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </div>
          <div className="flex py-4 justify-between">
            <div className="flex flex-row gap-4">
              <div>
                <img
                  src={Articleimg}
                  alt="Articleimg"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div>Michelle Appleton</div>
                <div className="text-gray-400">28 Jun 2020</div>
              </div>
            </div>
            <div className="">
              <img
                src={Shareicon}
                alt="Shareicon"
                className="w-12 h-12 hover:bg-gray-700 text-gray-800 bg-gray-300 text-center p-4 rounded-full cursor-pointer"
                onClick={handleTriggerClick}
              />
              {popVisible && <SharePopup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
