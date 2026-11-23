"use client";
import * as React from "react"
import { useTheme } from "next-themes"

import {profile, sections} from '../content/profile'
import { useEffect, useState } from "react";
import profilepic from '../public/profilepic.jpg'
import { SquareCode, Map, ArrowUpRight, ListTree, AudioLines} from "lucide-react";
import { FaGithub ,FaLinkedin} from "react-icons/fa";
import { cn } from '@/lib/utils';
import { ThemeToggle } from "./ui/theme-toggle";

function useActiveSection() {
  const [active, setActive] = useState<string>(sections[0].id);
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { root: document.querySelector("main"), rootMargin: "-20% 0px -60% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}



export function Sidebar() {
    const active = useActiveSection();
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [musicError, setMusicError] = useState(false);

    const toggleMusic = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (audio.paused) {
        try {
          await audio.play();
          setMusicError(false);
        } catch (error) {
          console.error("Audio playback failed:", error);
          setMusicError(true);
        }
      } else {
        audio.pause();
      }
    };

    return (
        <aside className="flex flex-col lg:sticky lg:top-0 lg:h-full lg:w-[280px] lg:shrink-0 lg:rule-r">
            <div className="p-4 rule-b">
                <img 
                    src = {profilepic.src}
                    alt = {profile.name}
                    width ={816}
                    height = {816}
                   className="aspect-square w-full object-cover grayscale-[20%]"
                />
            </div>

            <div className="px-4 py-3 rule-b">
                <div className="flex items-center gap-2 font-sans text-lg">
                    <span className= "font-bold">{profile.name}</span>
                    <button
                      type="button"
                      onClick={toggleMusic}
                      aria-label={isPlaying ? "Pause background music" : "Play background music"}
                      aria-pressed={isPlaying}
                      title={musicError ? "Could not load public/audio2.mp3" : undefined}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <AudioLines className="size-4" aria-hidden="true" />
                    </button>
                    <audio
                      ref={audioRef}
                      src="/audio2.mp3"
                      className="hidden"
                      preload="none"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      onError={() => setMusicError(true)}
                    />
                    <span className="sr-only" role="status" aria-live="polite">
                      {musicError ? "Could not load the music file." : isPlaying ? "Music playing." : ""}
                    </span>
                </div>
                <div className = "font-sans text-sm text-muted-foreground">
                    {profile.handle}                    
                </div>
            </div>

            <div className = "space-y-1 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground rule-b">
                <div className = "flex flex-wrap items-center gap-x-1.5 whitespace-nowrap">
                <SquareCode className= "size-3" aria-hidden />
                <span>{profile.role}</span>
                <span>·</span>
                <span className="text-success">{profile.status}</span>
                </div>
                
                <div className = "flex items-center gap-x-1.5">
                <Map className= "size-3" aria-hidden />
                <span>{profile.location}</span>
                </div>
            </div>

            <div className = "grid grid-cols-2 rule-b">
                <a 
                href = {`mailto:${profile.email}`}
                className = "flex items-center justify-center gap-1 py-4 font-sans text-sm transition-colors hover:bg-accent rule-r"
                >
                    Email <ArrowUpRight className = "size-3.5"/>
                </a>
                <a 
                href = {profile.resume}
                className = "flex items-center justify-center gap-1 py-4 font-sans text-sm transition-colors hover:bg-accent"
                >
                    Resume <ArrowUpRight className = "size-3.5"/>
                </a>
            </div>

            <div className="grid grid-cols-2 rule-b">
                {[
                { href: profile.socials.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                { href: profile.socials.github, Icon: FaGithub, label: "GitHub" },
                ].map(({ href, Icon, label }, i) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={cn(
                    "flex items-center justify-center py-4 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    i < 2 && "rule-r",
                    )}
                >
                    <Icon className="size-4" />
                </a>
                ))}
            </div>

            <nav className="hidden py-3 rule-b lg:block" aria-label="Page content">
        <div className="flex items-center gap-1.5 px-4 pb-3 text-xs font-bold uppercase tracking-wide">
          <ListTree className="size-3.5" aria-hidden /> Page content
        </div>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative block px-4 py-2 text-xs transition-colors",
                  active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute right-0 top-1/2 h-7 w-0.5 -translate-y-1/2 bg-foreground" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

        <div className="p-4 rule-b">
        <ThemeToggle/>
        </div>
        
        <div className= "hatch hidden min-h-24 flex-1 lg:block" aria-hidden />

        </aside>
    );
}
