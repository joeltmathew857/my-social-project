import React from "react";
import Anne from "../Assets/images/image-anne.jpg";
import Colton from "../Assets/images/image-colton.jpg";
import Irene from "../Assets/images/image-irene.jpg";

const BoxContainer = () => {
  return (
    <div className="">
      <div className=" text-white grid gap-4 grid-cols-3 justify-center	items-center h-screen ">
        <div className=" lg:h-64 w-96 p-8 rounded-xl bg-pink-950 rounded-xl ">
          <div className="flex flex-row py-4 space-x-8 ">
            <img
              src={Anne}
              alt="Anne"
              srcset=""
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col ">
              <span className="font-bold ">Colton Smith</span>{" "}
              <span className="text-rose-300	">Verified Buyer</span>
            </div>
          </div>
          <p>
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </div>
        <div className="h-64 w-96 p-8  rounded-xl bg-pink-950	">
          <div className="flex flex-row py-4 space-x-8">
            <img src={Colton} alt="Colton" className="rounded-full w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold "> Irene Roberts </span>{" "}
              <span className="text-rose-300	">Verified Buyer</span>
            </div>
          </div>
          <p>
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </div>
        <div className="h-64 w-96 p-8  rounded-xl bg-pink-950	">
          <div className="flex flex-row py-4 space-x-8">
            <img src={Irene} alt="Irene" className="rounded-full w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold ">Anne Wallace</span>{" "}
              <span className="text-rose-300	">Verified Buyer</span>
            </div>
          </div>
          <p>
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
