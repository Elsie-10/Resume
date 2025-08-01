import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiFlask, SiMysql, SiBootstrap, SiAxios } from "react-icons/si";

export default function Skills(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-12">
        MY SKILLS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-12">
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaHtml5 className="text-orange-600 text-6xl mb-2" />
          <p>HTML</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 text-6xl mb-2" />
          <p>CSS</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiJavascript className="text-yellow-400 text-6xl mb-2" />
          <p>JavaScript</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaReact className="text-cyan-400 text-6xl mb-2" />
          <p>React</p>
        </div>

        {/* Experience Box */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col justify-center items-center">
          <p className="text-4xl font-bold text-white">1</p>
          <p className="text-white text-sm leading-5 text-center">Years<br />Experience<br />Working</p>
          <a 
            href="/resume.pdf" 
            download 
            className="mt-4 px-4 py-1 text-sm bg-lime-400 text-black rounded-full hover:bg-lime-300 transition inline-block"
          >
            DOWNLOAD MY CV
          </a>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiNextdotjs className="text-white text-6xl mb-2" />
          <p>Next.js</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaPython className="text-yellow-500 text-6xl mb-2" />
          <p>Python</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiFlask className="text-gray-400 text-6xl mb-2" />
          <p>Flask</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex flex-col items-center">
          <SiMysql className="text-blue-600 text-6xl mb-2" />
          <p>SQL</p>
        </div>
      </div>
    </div>
  );
}
