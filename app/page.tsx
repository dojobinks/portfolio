import { Experience, Projects, Skills, Contact } from "@/components/Sections";
import { profile } from "../content/profile";

const YEAR = 2026;

export default function HomePage() {
  return (
    <>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="pt-8 text-[11px] text-muted-foreground">
        © {YEAR} {profile.name}. Built with React & Tailwind.
      </footer>
    </>
  );
}