import React from 'react'

const Alien = () => {
  return (
    <div className="alien_back mx-14  my-4  text-white ">
      <div className="relative uppercase layer name_container trans3">
        <p className="layer text-white font-bold text-lg whitespace-nowrap">
          Mint on 31/08/2022
        </p>
        <p className="font-bold absolute z-0 trans ">Murakami</p>
        <p className="font-bold  absolute top-20 z-0 trans2  ">Murakami</p>
        <p className="font-bold  absolute z-0 top-44 ">Murakami</p>
        <div className="spinblade3D w-60 absolute top-72 -right-20  z-20">
          <img src="/images/demon/blade.png" alt="" />
        </div>
        <div className="spinicon3D w-60 absolute left-[800px]  z-20">
          <img src="/images/demon/icon.png" alt="" />
        </div>
        <div className="w-[500px] element  z-20">
          <img src="/images/demon/clone.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Alien