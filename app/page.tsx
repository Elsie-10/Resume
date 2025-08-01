import About from "../components/Aboutpage";
import Skills from "../components/Skillpage";
import Project from "../components/Project";
import Contact from "../components/Contactpage";
import  Homepage from "../components/Homepage";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 text-slate-100 min-h-screen">
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="text-2xl font-bold text-gray-800">My Portfolio</div>
      <div className="hidden md:flex space-x-8">
        <a href="#Home" className="text-gray-700 hover:text-blue-500">Home</a>
        <a href="#About" className="text-gray-700 hover:text-blue-500">About</a>
        <a href="#Skills" className="text-gray-700 hover:text-blue-500">Skills</a>
        <a href="#Project" className="text-gray-700 hover:text-blue-500">Project</a>
        <a href="#Contact" className="text-gray-700 hover:text-blue-500">Contact</a>
      </div>
    </div>
  </div>
</nav>

      <div>
      <section id="Home" className="min-h-screen py-20"><Homepage/></section>
      <section id="About" className="min-h-screen flex items-center justify-center px-4 py-20"><About/></section>
      <section id="Skills" className="min-h-screen py-20"><Skills/></section>
      <section id="Project" className="min-h-screen py-20"><Project/></section>
      <section id="Contact" className="min-h-screen py-20"><Contact/></section>      
    </div>
    </div>
  );
}
