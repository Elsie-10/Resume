import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiFlask, SiMysql, SiBootstrap, SiAxios } from "react-icons/si";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-12">
        MY SKILLS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-12">
        {/* HTML */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaHtml5 className="text-orange-600 text-6xl mb-2" />
          <p className="text-gray-200">HTML</p>
        </div>
        {/* CSS */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 text-6xl mb-2" />
          <p className="text-gray-200">CSS</p>
        </div>
        {/* JavaScript */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiJavascript className="text-yellow-400 text-6xl mb-2" />
          <p className="text-gray-200">JavaScript</p>
        </div>
        {/* React */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaReact className="text-cyan-400 text-6xl mb-2" />
          <p className="text-gray-200">React</p>
        </div>

        {/* Experience Box (the yellow one) - Adjusted to match the layout */}
        <div className="bg-yellow-400 p-6 rounded-xl shadow-md flex flex-col justify-center items-center col-span-2 md:col-span-1">
          <p className="text-4xl font-bold text-gray-900">Ready</p>
          <p className="text-gray-900 text-sm leading-5 text-center">For Years<br /> of Experience<br />Working</p>
          <a
            href="/Resume.pdf"
            download
            className="mt-4 px-4 py-1 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-800 transition inline-block"
          >
            DOWNLOAD MY CV
          </a>
        </div>

        {/* Other skills continue here */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiNextdotjs className="text-gray-200 text-6xl mb-2" />
          <p className="text-gray-200">Next.js</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaPython className="text-yellow-500 text-6xl mb-2" />
          <p className="text-gray-200">Python</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiFlask className="text-gray-400 text-6xl mb-2" />
          <p className="text-gray-200">Flask</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiMysql className="text-blue-600 text-6xl mb-2" />
          <p className="text-gray-200">SQL</p>
        </div>
      </div>
    </div>
  );
}