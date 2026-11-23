import { cn } from "@/lib/utils";
import { projects, experience, skills, contact, profile } from '../content/profile'
import { ArrowUpRight } from "lucide-react";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 font-mono text-base font-bold">{children}</h2>;
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border  px-2 py-0.5 text-[11px] text-muted-foreground">{children}</span>
  );
}

export function Projects(){
    return (
        <section id='projects' className="scroll-mt-20">
            <SectionTitle>Projects</SectionTitle>
            <p className="mb-6 text-smm leading-7 text-muted foreground">
                {/*something about project*/}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
                {projects.map((p) =>(
                    <a
                        key = {p.title}
                        href={p.url}
                        target= "_blank"
                        rel= "noreferreer"
                        className="group flex flex-col  border border-dashed p-5 transition-colors hover:bg-accent">
                            <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-muted-foreground">
                                <span>{p.kind}</span>
                                <span>{p.year}</span>
                            </div>
                            <h3 className= "mt-3 font-sans text-base font-semibold">{p.title}</h3>
                            <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground">{p.body}</p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {p.tags.map((t) =>(
                                  <Chip key={t}>{t}</Chip>      
                                ))}
                            </div>
                            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">
                                Link
                                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                            </span>
                        </a>
                ) )}
            </div>
        </section>
    )
}

export function Experience(){
    return(
    <section id="experience" className="scroll-mt-20">
        <SectionTitle>Experience</SectionTitle>
        <ol className="relative">
            <span className="absolute bottom-3 left-[5px] top-2 w-px bg-foreground" aria-hidden/>
            {experience.map((e, i) => (
                <li key={e.title} className="relative pb-7 pl-8 last:pb-0">
                    <span 
                    className={cn(
                    "absolute left-0 top-1.5 size-[11px] border-2 border-foreground",
                    i === 0 ? "bg-foreground" : "bg-background",
                    )}
                    aria-hidden
                    />
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-sm font-bold">
                            {e.title} 
                            </h3>
                            <div className="text-xs text-mmuted-foreground">{e.org}</div>
                        </div>
                        <span className="shrink-0 border border-border px-2 py-0.5 text-[10px] text-muted-foreground">     
                        {e.year}
                        </span>
                        </div>
                        <p className="mt-3 text-xs leading-5 text-muted-foreground">
                            {e.body}
                        </p>
                </li>
            ))}
        </ol>
    </section>
    );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <SectionTitle>Skills & Tools</SectionTitle>
      <div className="divide-y divide-dashed divide-rule border-y border-dashed border-rule">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 py-4 sm:grid-cols-[160px_1fr]">
            <div className="text-xs font-bold uppercase tracking-wide">{s.group}</div>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <Chip key={i}>{i}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <SectionTitle>Contact</SectionTitle>
      <dl className="divide-y divide-dashed divide-rule">
        {contact.map((c) => (
          <div key={c.label} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]">
            <dt className="text-xs font-bold uppercase tracking-wide">{c.label}</dt>
            <dd className={cn("text-xs text-muted-foreground", c.label === "Availability" && "text-success")}>
              {c.value}
            </dd>
          </div>
        ))}
      </dl>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-6 flex items-center justify-between gap-6 border border-foreground p-5 text-sm leading-6 transition-colors hover:bg-foreground hover:text-background"
      >
        <span>
          Interested? Send a role summary, your stack, and a time to talk — I'll reply with fit and
          availability within 24 hours on weekends.
        </span>
        <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </section>
  );
}