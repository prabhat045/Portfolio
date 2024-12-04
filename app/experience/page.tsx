export default function ExperiencePage() {
  const experiences = [
    {
      company: 'Deutsche Telekom Clinical Solutions',
      position: 'Junior Software Engineer',
      duration: 'Feb 2023 - Present',
      description:
        'Currently enhancing digital healthcare solutions with a focus on secure DICOM image processing and backend development.',
    },
    {
      company: 'Deutsche Telekom Clinical Solutions',
      position: 'Software Engineer Intern',
      duration: 'June 2022 - Jan 2023',
      description:
        'Built foundational skills in Agile practices while contributing to the development and enhancement of existing modules.',
    },
    {
      company: 'Virtusa',
      position: 'Software Engineer Intern',
      duration: 'Jan 2021 - Apr 2021',
      description:
        'Started my professional journey by developing REST APIs and working on modern web applications.',
    },
  ];

  return (
    <div className="p-10 bg-gray-50 relative">
      <h1 className="text-2xl font-bold text-blue-500 mb-8 text-center">Experience</h1>
      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Experience Container */}
              <div
                className={`w-5/12 bg-gray-100 shadow-md rounded-lg p-6 ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}
              >
                <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  {exp.company}
                </h2>
                <p className="text-gray-600 mt-1">{exp.description}</p>
              </div>

              {/* Timeline Marker with Line */}
              <div className="w-1/12 flex flex-col items-center relative">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center z-10">
                  <span>{experiences.length - index}</span>
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 bg-gray-300 flex-grow mt-1"></div>
                )}
              </div>

              {/* Duration and Position */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <p className="text-lg font-semibold text-gray-800">{exp.position}</p>
                <p className="text-gray-600">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
