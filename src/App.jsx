import Genesis from "./components/Genesis";
import { Slideshow } from "./components/AutoSlider";
import Navbar from "./components/Navbar";
import Human from "./components/Human";
import Collection from "./components/Collection";


export default function App() {
  return (
    <div>
      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <Navbar />
      <Slideshow/> 
      {/* <Genesis/> */}
      {/* <Human/> */}
{/* <Collection/> */}

    </div>
  );
}
