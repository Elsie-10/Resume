import "../app/globals.css"

export default function About(){
    return(
         <div className="flex flex-col items-center justify-center w-full h-full px-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-8">
                WHO AM I ?
            </h2>

            <div className="max-w-2xl text-center text-gray-300 space-y-6 text-base leading-relaxed">
                <p>
                    I’m a passionate full-stack developer with a deep appreciation for clean, efficient code. Python is my specialty, and I love using it to solve real-world problems — from backend automation to data-driven applications.
                </p>
                <p>
                    Over the years, I’ve worked with front-end technologies like React, Next.js, and Tailwind CSS, combining them with backend tools like Django, Flask, and Node.js. This full-stack fluency helps me build scalable web applications end-to-end.
                </p>
                <p>
                    I’m always exploring new tools and frameworks — not just to keep up, but because I love learning. Whether I’m creating user-friendly interfaces or designing clean APIs, I’m always refining how I build.
                </p>
            </div>
        </div>
    )
}