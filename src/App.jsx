import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutUsSection from "./Components/AboutPage"; // Import the AboutUsSection component

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <div className="relative w-full flex flex-col items-center justify-center mt-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen"
          style={{ minHeight: "150vh" }} // Ensure the video covers the whole page
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
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center mt-10 min-h-screen"
        style={{
          backgroundImage:
            "url('C:/Users/prach/Desktop/React with Tailwind/Practice copy 2/public/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "calc(200vh - 180vh)", // Ensure the background image covers the remaining part below the video
        }}
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[100%] lg:max-w-[100%] xl:max-w-[100%]">
            <AboutUsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
