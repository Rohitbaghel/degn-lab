import Alien from "./components/Alien";
import {Slideshow} from "./components/AutoSlider";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <Navbar/>
      <Slideshow/> 
      {/* <Alien/> */}
    </div>
  );
}
