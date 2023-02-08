import React, {useEffect, useState} from "react";
import Collection from "./Collection";

const Genesis = () => {
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
    <div className="alien_back mx-32 px-20  my-4  text-white relative uppercase ">
      <div className="relative py-28">
        <p className="text-white  text-lg alien_font whitespace-nowrap absolute left-1 top-28 ">
          Mint on 31/08/2022
        </p>
        <div className="flex flex-col items-center ">
          <div className=" text-[200px] content_genesis ">
            <p
              className="trans alien_font leading-none mt-2"
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              Genesis
            </p>
            <p
              className="trans2 alien_font leading-none -mt-24"
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              Genesis
            </p>
            <p
              className="z-0 leading-none alien_font -mt-20 "
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              Genesis
            </p>
          </div>
        </div>
        <div className="spinblade3D w-60 absolute top-80 z-20">
          <img src="/images/genesis/blade.png" alt="" />
        </div>
        <div className="spinicon3D w-60 absolute right-0 z-20">
          <img src="/images/genesis/icon.png" alt="" />
        </div>
        <div className="w-[600px] alien z-20">
          <img src="/images/genesis/clone.png" alt="" />
        </div>
      </div>
      <div className="absolute top-[550px] right-20 ">
        <Collection />
      </div>
    </div>
  );
};

export default Genesis;
