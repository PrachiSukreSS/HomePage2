import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutUsSection from "./Components/AboutPage"; // Import the AboutUsSection component

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden ">
      <div className="relative w-full flex flex-col items-center justify-center mt-0">
        {" "}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen"
          style={{ minHeight: "140vh" }} // Increase the vertical height of the video
          autoPlay
          loop
          muted
        >
          <source src="/reflect bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
          <Header />
          <HeroSection />
        </div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-10 min-h-screen">
        <div className="w-full flex justify-center">
          <div className="w-3/4">
            <AboutUsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
