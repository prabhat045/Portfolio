import '@/app/globals.css';
import Resume from '../experience/Resume';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-10">
        {/* Name and Contact Details */}
        <div className="mb-6">
          <h1 className="text-5xl font-bold tracking-wide text-gray-900">
            PRABHAT <span className="text-blue-500">UPRETY</span>
          </h1>
          <p className="text-lg mt-2 text-gray-700">
            Lokanthali, Bagmati, Nepal &middot; +91 9834527415 &middot; prabhatuprety045@gmail.com
          </p>
        </div>

        {/* Job Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-6">
          Software Engineer
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          I am a passionate software developer focused on building scalable and efficient backend systems.
          With a strong foundation in database management and backend development, I specialize in designing
          secure, high-performance applications tailored to solve real-world problems. Outside of work, I love
          exploring nature through trekking, staying active with football, and immersing myself in the world of
          gaming.
        </p>

        {/* Social Media Links */}
        <div className="mt-8 flex space-x-6">
          <a
            href="https://github.com/prabhat045"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <img src="/Portfolio/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/prabhatuprety/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <img src="/Portfolio/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>

        {/* Resume Section */}
        <div className="mt-10">
          <Resume />
        </div>
      </main>
    </div>
  );
}
