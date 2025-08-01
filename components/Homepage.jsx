"use client";

import  Image from "next/image"
import { motion } from "framer-motion";


export default function Homepage(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 md:flex-row md:space-x-12 space-y-8 md:space-y-0">
            <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
            <h2 className="
            text-3xl sm:text-4xl lg:text-5xl font-bold
    text-transparent bg-clip-text
    bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 inline-block">
                 I'm Elsie Oscar 
            </h2>
        <br></br>
            <p className="text-gray-300 text-lg sm:text-xl 
             text-transparent bg-clip-text
    bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 inline-block">
                 Full Stack Developer
             </p>
        </motion.div>

        <motion.div
       initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="w-80 h-96 bg-gray-700 shadow-xl overflow-hidden mask-b-from-75% mask-b-to-100%"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        }}  
      >
        
        <Image 
        src="https://res.cloudinary.com/dht2k23ny/image/upload/f_auto,q_auto,w_800/v1754067714/MY_IMAGE_j7yyj0.jpg"
        alt="Optimized Cloudinary image"
        width={320}
        height={384}
        priority
         className="w-full h-full object-cover"
        />     
        </motion.div>   
        </div>
    )
}