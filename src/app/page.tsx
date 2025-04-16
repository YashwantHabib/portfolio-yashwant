import Experience from "./_components/experience";
import Intro from "./_components/intro";
import Projects from "./_components/projects";
import Socials from "./_components/socials";

export default function Home() {
  return (
    <div>
      <Intro />
      <div className="flex flex-col sm:flex-row">
        <Experience />
        <Projects />
      </div>
      <Socials />
    </div>
  );
}
