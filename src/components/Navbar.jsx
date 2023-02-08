import React from 'react'
import { GiConverseShoe} from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 alien_font ">
      <p className=" text-white text-xl">ATFKT</p>
      <p className=" text-white text-3xl ">cloneX</p>
      <div className="flex gap-3 text-center">
        <p className=" text-white text-sm">sneakers</p>
        <p className=" text-white text-sm">all dna</p>
      </div>
    </div>
  );
}

export default Navbar
