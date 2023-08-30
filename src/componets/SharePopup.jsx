import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SharePopup = () => {
  return (
    <div className="absolute flex bg-gray-600 p-6 shadow-lg rounded-md ">
      <div className="flex flex-row gap-2">
        <div>
          <a href="https://en-gb.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
