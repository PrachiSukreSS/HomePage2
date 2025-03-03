import { FaInfoCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div
        className="bg-blackviolet bg-opacity-10 rounded-full p-1 mb-2 w-1/3 text-center border border-blackviolet relative"
        style={{ marginTop: "5%", marginBottom: "0%", fontFamily: "Inter" }}
      >
        <p
          className="text-xl  text-purple-400 relative z-10"
          style={{ fontFamily: "Inter" }}
        >
          Time to dive into code!
        </p>
        <div className="absolute inset-0 rounded-full border-2 border-purple-600 opacity-75 "></div>
        <div className="absolute inset-0 rounded-full border-2 border-purple-600 opacity-50 animate-pulse"></div>
      </div>
      {/* Main Section */}
      <div className="mt-8 mb-8">
        <h2 className="text-8xl font-medium text-white mb-8 flex items-center justify-center">
          <div className="relative group"></div>
        </h2>
      </div>
      <main className="flex flex-col md:flex-row justify-between items-center text-center p-12 mt-0">
        <div className="flex flex-col items-center md:w-full mt-[-7rem]">
          <h1
            className="text-6xl text-white font-extrabold text-shadow-md mb-8"
            style={{ fontFamily: "MS Sans Serif" }}
          >
            Learn- Grow - Inspire With Us
          </h1>
          <p
            className="text-xl text-gray-400 text-semibold mb-2"
            style={{ fontFamily: "Inria Sans-serif", fontWeight: "semibold" }}
          >
            NEVER MISS A NOTE, IDEA OR CONNECTION
          </p>

          <div className="mt-60 flex mr-12 ml-0 justify-start w-full text-justify">
            <h2 className="text-8xl font-medium text-white mb-8 flex items-center justify-start">
              <div className="relative group mr-12 justify-start">
                <button className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-4 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-pink-300 via-purple-600 to-blue-300"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90">
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mr-2 h-5 w-5 text-pink-300 transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      <path
                        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span className="relative bg-gradient-to-r from-pink-300 via-violet-400 to-blue-300 bg-clip-text text-transparent font-semibold">
                      Let`s get started
                    </span>
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-2 h-5 w-5 text-blue-300 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </h2>
          </div>
          <p className="text-2xl mb-12 opacity-80 text-justify w-[130%]">
            Welcome to the RSCOE Coding Club, Join us to learn, inspire, and
            grow as we explore the endless possibilities of coding and
            programming. We believe that coding is an art and we are here to
            help you master it.
          </p>
          <p
            className="text-gray-400 text-lg flex items-start cursor-pointer justify-start"
            onClick={() => (window.location.href = "#AboutUsSection")}
          >
            <FaInfoCircle className="mr-2" />
            Explore more
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
