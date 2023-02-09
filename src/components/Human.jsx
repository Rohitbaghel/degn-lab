import React, { useEffect, useState , useRef} from "react";
import Collection from "./Collection";

const Human = ({data}) => {
const {name,icon,blade,clone} = data
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

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // const [scrollState, setScrollState] = useState(true);
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
  //     if (scrollTop === 0) {
  //       setScrollState(false);
  //     }
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       setScrollState(false);
  //     }
  //   };
  //   containerRef.current.addEventListener("scroll", handleScroll);
  // }, [scrollState]);
 

  return (
    <div className="alien_back mx-40 px-20  my-4  text-white relative uppercase ">
      <div className="relative py-28">
        <p
          className={`text-white  text-lg whitespace-nowrap absolute  top-24 human_text ${
            isAnimating ? "opacity-0" : "opacity-100"
          } `}
        >
          Mint on 31/08/2022
        </p>
        <div className="flex flex-col items-center">
          <div
            className={`text-[200px] ${
              isAnimating ? "content_human_hide" : "content_human"
            }  `}
          >
            <p
              className="trans human_font leading-none"
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              {name}
            </p>
            <p
              className="trans2 human_font  leading-none -mt-20"
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              {name}
            </p>
            <p
              className="human_text z-0 leading-none -mt-16 "
              style={{
                transform: `translate(-${translateX}px, ${translateY}px)`,
              }}
            >
              {name}
            </p>
          </div>
        </div>
        <div
          className={`spinblade3D w-60 absolute top-[350px] z-20 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src={blade} alt="" />
        </div>
        <div
          className={`spinicon3D w-60 absolute left-[700px] top-10  z-20 ${
            isAnimating ? "opacity-0" : "opacity-100"
          } `}
        >
          <img src={icon} alt="" />
        </div>
        <div
          className={`w-[600px] ${
            isAnimating ? "alien-diappear" : "alien"
          }   z-20`}
        >
          <img src={clone} alt="" />
        </div>
      </div>
      <div
        className={`absolute top-[550px] right-20 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <Collection />
      </div>
    </div>
  );
};

export default Human;
