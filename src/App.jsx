import Genesis from "./components/Genesis";

import Navbar from "./components/Navbar";
import Human from "./components/Human";
import Collection from "./components/Collection";
import Angel from "./components/Angel";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const UIdata = [
    {
    name: "Angel",
    blade: "/images/angel/blade.png",
    icon: "/images/angel/icon.png",
    clone: "/images/angel/clone.png",
  },
    {
      name: "Human",
      blade: "/images/alien/blade.png",
      icon: "/images/alien/icon.png",
      clone: "/images/alien/clone.png",
    },
    {
      name: "genesis",
      blade: "/images/genesis/blade.png",
      icon: "/images/genesis/icon.png",
      clone: "/images/genesis/clone.png",
    },
  ];
  const [increment, setIncrement] = useState(0);

  const [data, setData] = useState({
    name: "Angel",
    blade: "/images/angel/blade.png",
    icon: "/images/angel/icon.png",
    clone: "/images/angel/clone.png",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIncrement((i) => (i === 2 ? 0 : i + 1));
      setData(UIdata[increment]);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [increment]);
  console.log(increment, data);

  return (
    <div>
      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <Navbar />

      {/* <Genesis/> */}
      <Human data={data} />
      {/* <Angel/>  */}
      {/* <Collection/> */}
    </div>
  );
}
