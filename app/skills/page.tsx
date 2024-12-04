"use client";

import '@/app/globals.css';

const skills = [
  { name: 'Java', icon: '💻', description: 'Experience in building scalable backend systems.' },
  { name: 'C#', icon: '⚙️', description: 'Enhanced system security and developed enterprise applications using .NET.' },
  { name: 'JavaScript', icon: '🌐', description: 'Built interactive web applications with modern frameworks.' },
  { name: 'Spring Boot', icon: '☕', description: 'Developed REST APIs and backend services.' },
  { name: 'React', icon: '⚛️', description: 'Expert in creating dynamic frontend applications.' },
  { name: 'ASP.NET', icon: '🖥️', description: 'Experience in web development using MVC architecture.' },
  { name: 'Git/TFS', icon: '🔧', description: 'Proficient in version control and collaborative development workflows.' },
];

export default function SkillsPage() {
  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Skills</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 gap-6 p-6 bg-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:bg-gray-100 transition-all"
          >
            <div className="text-4xl">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{skill.name}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
