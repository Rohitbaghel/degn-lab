import React from "react";
import Genesis from "./Genesis";
import Alien from "./Human";
import Angel from "./Angel";
import { useInView } from "react-intersection-observer";

const colors = [<Genesis />, <Alien />, <Angel />];
const delay = 2500;
 


export function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
   const [ref, inView, entry] = useInView({
     threshold: 1,
   });

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  

  return (
    <div className="slideshow  relative" ref={ref}>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide " key={index}>
            {backgroundColor}
          </div>
        ))}
      </div>
      <div className="slideshowDots absolute bottom-0 left-[45%]">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""} `}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
