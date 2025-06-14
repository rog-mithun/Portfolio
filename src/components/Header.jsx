import { useEffect, useState } from "react";

const sections = [
  "home",
  "profile",
  "skills",
  "projects",
  "achievements",
  "certifications",
  "contact"
];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-gray-950/80 backdrop-blur border-b border-white/10 shadow-md transition-colors">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          <span className="bg-gradient-to-r from-white via-gray-200 to-blue-200 bg-clip-text text-transparent">
            Mithunsankar
          </span>
        </h1>

        <div className="flex gap-4 items-center text-sm font-semibold">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`capitalize px-3 py-1 relative transition-all duration-300 ease-in-out
                ${active === id
                  ? "text-white font-bold scale-110 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_18px_rgba(0,212,255,0.95)]"
                  : "text-gray-800 dark:text-gray-200"
                }
                hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400
                hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]
                before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500
                hover:before:w-full before:transition-all before:duration-300 before:rounded-full
              `}
            >
              {id}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
