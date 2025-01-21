import AboutMe from './aboutme/page';
import Chatbot from './chatbot';
import ExperiencePage from './experience/page';
import Projects from './projects/page';
import SkillsPage from './skills/page';

export default function Home() {
  return (
    <div>
      <section id="about" className="min-h-screen">
        <AboutMe />
      </section>
      <section id="experience" className="min-h-screen">
        <ExperiencePage />
      </section>
      <section id="skills" className="min-h-screen">
        <SkillsPage />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
{/*       </section>
       <Chatbot/> */}
    </div>
  );
}
