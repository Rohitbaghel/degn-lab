import React from "react";
import Collection from "./Collection";

const Human = () => {
  return (
    <div className="alien_back mx-40 px-20  my-4  text-white relative uppercase ">
      <div className="relative py-28">
        <p className="text-white  text-lg whitespace-nowrap absolute  top-24 human_text ">
          Mint on 31/08/2022
        </p>
        <div className="flex flex-col items-center">
          <div className=" text-[200px] content_human ">
            <p className="trans human_font leading-none">Human</p>
            <p className="trans2 human_font  leading-none -mt-20">Human</p>
            <p className="human_text z-0 leading-none -mt-16 ">Human</p>
          </div>
        </div>
        <div className="spinblade3D w-60 absolute top-[350px] z-20">
          <img src="/images/alien/blade.png" alt="" />
        </div>
        <div className="spinicon3D w-60 absolute left-[700px] top-10  z-20">
          <img src="/images/alien/icon.png" alt="" />
        </div>
        <div className="w-[600px] alien   z-20">
          <img src="/images/alien/clone.png" alt="" />
        </div>
      </div>
      <div className="absolute top-[550px] right-20 ">
        <Collection />
      </div>
    </div>
  );
};

export default Human;
