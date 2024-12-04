"use client";

import '@/app/globals.css';

const projects = [
  {
    name: 'Digital Healthcare Solution',
    description:
      'Developed a robust backend system for DICOM image management, including secure storage, processing, and optimized downloads.',
    technologies: ['C#', '.NET Core', 'RabbitMQ', 'PostgreSQL', 'Angular'],
    icon: '💊',
  },
  {
    name: 'Clinical Trial Subject Module',
    description:
      'Improved subject and cohort handling for clinical trials with a scalable and user-friendly interface.',
    technologies: ['C#', 'Entity Framework', 'SQL Server'],
    icon: '🧬',
  },
  {
    name: 'JWT Authorization Implementation',
    description:
      'Integrated JWT-based user authorization for secure authentication in a cross-platform environment.',
    technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'C#'],
    icon: '🔐',
  },
  {
    name: 'Employee Management System',
    description:
      'Collaborated with a team of interns to create an in-house tool for employee data management and reporting.',
    technologies: ['C#', 'ASP.NET', 'PostgreSQL', 'Angular'],
    icon: '👨‍💼',
  },
  {
    name: 'Blog Application',
    description:
      'Built a full-stack blog application with user authentication, dynamic post creation, and interactive UI.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: '✍️',
  },
  {
    name: 'Dynamic Form Builder',
    description:
      'Created a dynamic form builder tool for generating customizable forms with live previews.',
    technologies: ['C#', 'ASP.NET', 'Cosmos DB'],
    icon: '📋',
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Project Icon */}
            <div className="text-4xl text-gray-800">{project.icon}</div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.name}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>

            {/* Technologies */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700">Technologies:</h4>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
