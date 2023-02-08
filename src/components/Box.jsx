import React, { useState, useEffect } from "react";

const Box = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    setRotateX(-(e.clientY - window.innerHeight / 2) / 10);
    setRotateY((e.clientX - window.innerWidth / 2) / 10);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        perspective: "500px",
        perspectiveOrigin: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          height: "100px",
          width: "100px",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default Box;
