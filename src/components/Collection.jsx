import React from "react";

const Collection = () => {
  return (
    <div className="border rounded-lg  border-white h-14 w-[270px] py-3 pl-3  flex whitespace-nowrap ">
      <p className="text-lg font-extrabold uppercase text-white px-2 font-serif">
        see Collection
      </p>
      <div className="">
        <span className="m_scroll_arrows unu -rotate-45 mt-[6px]"></span>
        <span className="m_scroll_arrows doi -rotate-45 ml-4 -mt-4"></span>
        <span className="m_scroll_arrows trei -rotate-45 ml-8 -mt-4"></span>
      </div>
    </div>
  );
};

export default Collection;
