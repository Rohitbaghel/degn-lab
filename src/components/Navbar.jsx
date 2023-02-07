import React from 'react'
import { GiConverseShoe} from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <p className="uppercase text-white font-black text-xl">ATFKT</p>
      <p className="uppercase text-white font-black text-3xl ">cloneX</p>
      <div className="flex gap-3 text-center">
        <p className="uppercase text-white font-black text-sm">sneakers</p>
        <p className="uppercase text-white font-black text-sm">all dna</p>
      </div>
    </div>
  );
}

export default Navbar
