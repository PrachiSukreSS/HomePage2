function App() {
  return (
    <div
      style={{ backgroundColor: "#171616" }}
      className="min-h-screen text-white font-sans flex flex-col items-center"
    >
      {/* Header Section */}
      <header className="bg-[#531111f0] py-2 px-8 rounded-lg w-[90%] mx-auto mt-4">
        <nav className="flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold">
            <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          </div>
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300"
            >
              About Us
            </a>
            <a
              href="/events"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300"
            >
              Events
            </a>
            <a
              href="/team"
              className="hover:text-gray-300 px-3 py-1 rounded-md transition duration-300"
            >
              Our Team
            </a>
            <a
              href="/login"
              className="bg-red-700 px-4 py-1 rounded-md hover:bg-red-500 transition duration-300"
            >
              Login
            </a>
          </div>
        </nav>
      </header>

      <div className="w-full max-w-4xl mx-4 flex-grow flex flex-col justify-center">
        {/* Main Section */}
        <main className="flex flex-col justify-center items-start text-left p-12 mt-4 ml-4">
          <div className="flex flex-col items-start text-left">
            <h1
              className="text-6xl font-extrabold text-red-600 mb-4"
              style={{ fontFamily: "MS Sans Serif" }}
            >
              Coding Club
            </h1>
            <h2
              className="text-4xl font-medium text-white mb-6"
              style={{ fontFamily: "Hack" }}
            >
              RSCOE
            </h2>
            {/* Description */}
            <p className="text-xl max-w-2xl mb-6 text-left">
              Welcome to the RSCOE Coding Club, where creativity meets
              technology! Join us to learn, inspire, and grow as we explore the
              endless possibilities of coding through exciting events,
              collaborative projects, and a vibrant community of innovators.
            </p>
            {/* Get Started Button */}
            <button className="bg-red-600 px-6 py-2 text-xl font-semibold rounded-lg text-white hover:bg-red-500 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
