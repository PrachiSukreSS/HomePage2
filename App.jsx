import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaUsers,
  FaSignInAlt,
} from "react-icons/fa";

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col items-start">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/reflect bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay Content */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <header className="bg-[#3d304c99] py-2 px-8 rounded-lg w-full mx-auto mt-4">
          <nav className="flex justify-between items-center">
            {/* Logo or Brand Name */}
            <div className="text-2xl font-bold">
              <a href="/">
                <img src="logo3.png" alt="Logo" className="h-10" />
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="hover:text-gray-300 px-2 py-1 rounded-md transition duration-300 flex items-center"
              >
                <FaHome className="mr-1" /> Home
              </a>
              <a
                href="/about"
                className="hover:text-gray-300 px-2 py-1 rounded-md transition duration-300 flex items-center"
              >
                <FaInfoCircle className="mr-1" /> About Us
              </a>
              <a
                href="/events"
                className="hover:text-gray-300 px-2 py-1 rounded-md transition duration-300 flex items-center"
              >
                <FaCalendarAlt className="mr-1" /> Events
              </a>
              <a
                href="/team"
                className="hover:text-gray-300 px-2 py-1 rounded-md transition duration-300 flex items-center"
              >
                <FaUsers className="mr-1" /> Our Team
              </a>
              <a
                href="/login"
                className="bg-violet-700 px-3 py-1 rounded-md hover:bg-gray-500 transition duration-300 flex items-center"
              >
                <FaSignInAlt className="mr-1" /> Login
              </a>
            </div>
          </nav>
        </header>

        <div className="w-full max-w-4xl mx-4 flex-grow flex flex-col justify-center ">
          {/* Hero Section */}
          <div
            className="bg-white bg-opacity-10 rounded-full p-4 mb-4 w-2/3 text-center"
            style={{ marginLeft: "10%", marginTop: "10%" }}
          >
            <p className="text-xl font-semibold text-white">
              Time to dive into code!
            </p>
          </div>
          {/* Main Section */}
          <main className="flex flex-col md:flex-row justify-between items-start text-left p-12 mt-0">
            <div className="flex flex-col items-start text-left md:w-5/4">
              <h1
                className="text-6xl text-white font-extrabold text-white-600 mb-4"
                style={{ fontFamily: "MS Sans Serif" }}
              >
                Learn - Grow - Inspire
              </h1>
              <h2 className="text-5xl font-medium text-white mb-6 flex items-center w-full">
                With Us
                <button className="bg-purple-600 px-6 py-2 text-xl font-semibold rounded-lg text-white hover:bg-gray-500 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 ml-4">
                  Get started
                </button>
              </h2>
              {/* Description */}
              <p className="text-xl mb-4 opacity-80 text-justify w-[80%]">
                Welcome to the RSCOE Coding Club, Join us to learn, inspire, and
                grow as we explore the endless possibilities of coding and
                programming. We believe that coding is an art and we are here to
                help you master it.
              </p>

              <a
                href="/about"
                className="text-gray-400 text-xl font-semibold hover:text-gray-300 transition duration-300 flex items-center"
              >
                <FaInfoCircle className="mr-2" /> Explore more{" "}
                <span className="ml-2">→</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
