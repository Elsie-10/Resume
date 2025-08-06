import About from "../components/Aboutpage";
import Skills from "../components/Skillpage";
import Project from "../components/Project";
import Contact from "../components/Contactpage";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    // Main container with a deep, dark charcoal background
    <div className="flex bg-gray-950 text-gray-200 min-h-screen">
      
      {/* Navbar with an even deeper background for contrast */}
      <nav className="bg-gray-900 text-gray-200 shadow-lg fixed left-0 top-0 w-64 h-full z-50 p-4 flex flex-col items-center border-r border-gray-800">
        
        {/* Animated Profile Image */}
        <div className="mt-8 mb-12 relative w-32 h-32">
          {/* Outer animated ring with a subtle gold accent */}
          <div className="absolute inset-0 rounded-full animate-pulse-slow bg-yellow-400 opacity-25"></div>
          
          {/* Inner image container with a more elegant border and hover effect */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-400 transform transition-transform duration-300 hover:scale-105">
            <img 
              src="https://res.cloudinary.com/dht2k23ny/image/upload/v1754067737/ELSIE_Image_yzqpmx.jpg" 
              alt="My Profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 w-full px-4">
          <a href="#Home" className="text-lg font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-200">Home</a>
          <a href="#About" className="text-lg font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-200">About</a>
          <a href="#Skills" className="text-lg font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-200">Skills</a>
          <a href="#Project" className="text-lg font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-200">Project</a>
          <a href="#Contact" className="text-lg font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* Main Content Sections */}
      <div className="flex-1 ml-64 p-8">
        <section id="Home" className="min-h-screen py-20"><Homepage /></section>
        <section id="About" className="min-h-screen flex items-center justify-center px-4 py-20"><About /></section>
        <section id="Skills" className="min-h-screen py-20"><Skills /></section>
        <section id="Project" className="min-h-screen py-20"><Project /></section>
        <section id="Contact" className="min-h-screen py-20"><Contact /></section>
      </div>
    </div>
  );
}