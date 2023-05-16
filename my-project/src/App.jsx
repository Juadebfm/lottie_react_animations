import Lottie from "lottie-react";
import animationData from "./assets/58002-using-mobile-phone.json";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center lg:mx:48px text-black font-serif">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">
          Create lovely animations with Lottie
        </h1>{" "}
        <p>Create fancy animations</p>
        <div className="flex gap-2 justify-center">
          <button>Learn More</button>
          <button>Library</button>
        </div>
        <Lottie
          animationData={animationData}
          loop={false}
          className="w-[50%] mx-auto"
        />
      </div>
    </div>
  );
}

export default App;
