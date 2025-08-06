import "../app/globals.css"

export default function About(){
    return(
         <div className="flex flex-col items-center justify-center w-full h-full px-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-8">
                WHO AM I ?
            </h2>

            <div className="max-w-2xl text-center text-gray-300 space-y-6 text-base leading-relaxed">
                <p>
                    I am a passionate and versatile full-stack developer specializing in Python.
                </p>
                <p>
                    With expertise in both front-end (React, Next.js, Tailwind CSS) and back-end (Django, Flask, Node.js) technologies, I build scalable, end-to-end web applications.
                </p>
                <p>
                    I am a lifelong learner who enjoys exploring new tools to create clean code and user-friendly interfaces.
                </p>
            </div>
        </div>
    )
}