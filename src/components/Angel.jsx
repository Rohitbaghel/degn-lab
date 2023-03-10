import React, { useEffect, useState } from "react";
import Collection from "./Collection";



const Angel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleMouseMove = (e) => {
    setTranslateX(-(e.clientY - window.innerHeight / 2) / 10);
    setTranslateY((e.clientX - window.innerWidth / 2) / 10);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="alien_back mx-40 px-20  my-4  text-white relative uppercase ">
      <div className="relative py-28">
        <p className="text-white  text-lg whitespace-nowrap absolute  top-24 human_text ">
          Mint on 31/08/2022
        </p>
        <div className="flex flex-col items-center">
          <div className=" text-[200px] content_human ">
            <p
              className="trans human_font leading-none"
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              Angel
            </p>
            <p
              className="trans2 human_font  leading-none -mt-20"
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              Angel
            </p>
            <p
              className="human_text z-0 leading-none -mt-16 "
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              Angel
            </p>
          </div>
        </div>
        <div
          className="spinblade3D w-60 absolute top-[350px] z-20"
          // style={{ backgroundImage: `url(/images/alien/blade_sprite.png)` }}
        ></div>
        <div
          className="spinner z-20 "
          style={{ backgroundImage: `url(/images/alien/blade_sprite.png)` }}
        ></div>
        <div className="w-[600px] alien   z-20">
          <img src="/images/angel/clone.png" alt="" />
        </div>
      </div>
      <div className="absolute top-[550px] right-20 ">
        <Collection />
      </div>
    </div>
  );
};

export default Angel;
