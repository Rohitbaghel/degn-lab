import React from "react";
import Collection from "./Collection";

const Genesis = () => {
//   let constrain = 20;
// let mouseOverContainer = document.getElementById("ex1");
// let ex1Layer = document.getElementById("ex1-layer");

// function transforms(x, y, el) {
//   let box = el.getBoundingClientRect();
//   let calcX = -(y - box.y - (box.height / 2)) / constrain;
//   let calcY = (x - box.x - (box.width / 2)) / constrain;
  
//   return "perspective(100px) "
//     + "   rotateX("+ calcX +"deg) "
//     + "   rotateY("+ calcY +"deg) ";
// };

//  function transformElement(el, xyEl) {
//   el.style.transform  = transforms.apply(null, xyEl);
// }

// mouseOverContainer.onmousemove = function(e) {
//   let xy = [e.clientX, e.clientY];
//   let position = xy.concat([ex1Layer]);

//   window.requestAnimationFrame(function(){
//     transformElement(ex1Layer, position);
//   });
// };
  return (
    <div className="alien_back mx-32 px-20  my-4  text-white relative uppercase ">
      <div className="relative py-28">
        <p className="text-white  text-lg alien_font whitespace-nowrap absolute left-1 top-28 ">
          Mint on 31/08/2022
        </p>
        <div className="flex flex-col items-center ">
          <div className=" text-[200px] content_genesis ">
            <p className="trans alien_font leading-none mt-2">Genesis</p>
            <p className="trans2 alien_font leading-none -mt-24">Genesis</p>
            <p className="z-0 leading-none alien_font -mt-20 ">Genesis</p>
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
