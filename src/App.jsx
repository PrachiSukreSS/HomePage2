import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaUsers,
  FaSignInAlt,
} from "react-icons/fa";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#171616",
        //  backgroundImage: "url('bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen text-white font-sans flex flex-col items-start"
    >
      {/* Header Section */}
      <header className="bg-[#531111f0] py-2 px-8 rounded-lg w-[90%] mx-auto mt-4">
        <nav className="flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold">
            <img src="logo3.png" alt="Logo" className="h-8" />
          </div>
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300 flex items-center"
            >
              <FaHome className="mr-2" /> Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300 flex items-center"
            >
              <FaInfoCircle className="mr-2" /> About Us
            </a>
            <a
              href="/events"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300 flex items-center"
            >
              <FaCalendarAlt className="mr-2" /> Events
            </a>
            <a
              href="/team"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300 flex items-center"
            >
              <FaUsers className="mr-2" /> Our Team
            </a>
            <a
              href="/login"
              className="bg-red-700 px-4 py-1 rounded-md hover:bg-red-500 transition duration-300 flex items-center"
            >
              <FaSignInAlt className="mr-2" /> Login
            </a>
          </div>
        </nav>
      </header>

      <div className="w-full max-w-4xl mx-4 flex-grow flex flex-col justify-center">
        {/* Main Section */}
        <main className="flex flex-col md:flex-row justify-between items-start text-left p-12 mt-4 ml-12">
          <div className="flex flex-col items-start text-left md:w-2/3">
            <h1
              className="text-6xl font-extrabold text-red-600 mb-4 ml-12"
              style={{ fontFamily: "MS Sans Serif" }}
            >
              Coding Club
            </h1>
            <h2
              className="text-4xl font-medium text-white mb-6 ml-12"
              style={{ fontFamily: "Hack" }}
            >
              RSCOE
            </h2>
            {/* Description */}
            <p className="text-xl mb-6 text-justify w-[80%] ml-12">
              Welcome to the RSCOE Coding Club, Join us to learn, inspire, and
              grow as we explore the endless possibilities of coding and
              programming. We believe that coding is an art and we are here to
              help you master it.
            </p>
            {/* Buttons */}
            <div className="flex space-x-4 ml-12">
              <button className="bg-red-600 px-6 py-2 text-xl font-semibold rounded-lg text-white hover:bg-red-500 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                Get started
              </button>
              <a
                href="/about"
                className="text-gray-400 text-xl font-semibold hover:text-gray-300 transition duration-300 flex items-center"
              >
                <FaInfoCircle className="mr-2" /> Explore{" "}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          {/* Image 
          <div className="md:w-1/3 flex justify-center items-center ml-12">
            <img
              src="image2.png"
              alt="Coding Club"
              className="h-[400px] w-[900px] object-cover rounded-lg shadow-lg"
            />
          </div>
          */}
        </main>
      </div>
    </div>
  );
}

export default App;
