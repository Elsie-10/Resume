'use client';
import { useState } from 'react';

const projects = [
  {
    title: "School Ride",
    description: "This is an app where parents can book a ride for their children.This offers a safe and affordable rides for their childrens. This is most helpful app you can find",
    short: "Safe and reliable ride",
    image: "https://res.cloudinary.com/dht2k23ny/image/upload/v1754127108/Screenshot_2025-08-02_123050_gwrodl.png",
    repo: "https://github.com/Melloniah/School-Minibus-Booking-System-Clean",
  },
  // ... other projects
  {
    title: "Expense Tracker",
    description: "This is an app that helps everyone keep track of their expenses. I know it might be hard to keep track of you money but with this it will help you, make better choices financially",
    short: "Budget for a better tommorrow",
    image: "https://res.cloudinary.com/dht2k23ny/image/upload/v1754127510/Screenshot_2025-08-02_123741_ysxmty.png",
    repo: "https://github.com/Elsie-10/expense-tracker-phase-2-code-challenge",
  },

  {
    title: "MediTracker",
    description: "This is a very helpful app to medics and patients.Today cues in hospitals are so long that people do not want to go to the hospitals anymore.This helps patients to book an appointment and help doctors view their appointments",
    short: "Fast and Quick appointments",
    image: "https://res.cloudinary.com/dht2k23ny/image/upload/v1754127789/Screenshot_2025-08-02_124250_py7gyk.png",
    repo: "https://github.com/Elsie-10/MediTracker-group-project",
  }
];

export default function Project(){
    const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen  text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800 rounded-lg p-4 cursor-pointer shadow-lg hover:scale-105 transition transform duration-300 relative group"
          >
            <div className="h-2 w-2 bg-red-500 absolute top-0 left-0 w-6 h-6"></div>
            <h3 className="text-lg font-bold mb-2 text-center">{project.title}</h3>
            <p className="text-sm text-gray-400 text-center">{project.short}</p>
            <img
              src={project.image}
              alt={project.title}
              className="mt-4 w-full h-40 object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 text-white rounded-lg p-6 max-w-lg w-full relative shadow-xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-4 text-gray-300 hover:text-white text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-4 rounded w-full h-48 object-cover"
            />
            <p className="mb-4 text-sm text-gray-300">{selectedProject.description}</p>
            <a
              href={selectedProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded transition"
            >
              View Repository
            </a>
          </div>
        </div>
      )}
    </div>
  );
}