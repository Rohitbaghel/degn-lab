import React, { useEffect, useState } from "react";
import Collection from "./Collection";


let data = [
  {
    name: "Angel",
    blade: "/images/angel/blade.png",
    icon: "/images/angel/icon.png",
    clone: "/images/angel/clone.png",
  },
  {
    name: "Human",
    blade: "/images/human/blade.png",
    icon: "/images/human/icon.png",
    clone: "/images/human/clone.png",
  },
  {
    name: "genesis",
    blade: "/images/genesis/blade.png",
    icon: "/images/genesis/icon.png",
    clone: "/images/genesis/clone.png",
  },
];

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
        <div className="spinblade3D w-60 absolute top-[350px] z-20">
          <img src="/images/angel/blade.png" alt="" />
        </div>
        <div className="spinicon3D w-60 absolute left-[700px] top-10  z-20">
          <img src="/images/angel/icon.png" alt="" />
        </div>
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
