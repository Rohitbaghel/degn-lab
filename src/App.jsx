import Genesis from "./components/Genesis";

import Navbar from "./components/Navbar";
import Human from "./components/Human";
import Collection from "./components/Collection";
import Angel from "./components/Angel";




export default function App() {
  return (
    <div>
      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <Navbar />

      {/* <Genesis/> */}
      <Human/>
      {/* <Angel/>  */}
      {/* <Collection/> */}
    </div>
  );
}
