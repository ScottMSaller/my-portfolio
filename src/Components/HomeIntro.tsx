// components/HomeIntro.tsx
import { motion } from "framer-motion";

type Badge = {
  name: string;
  src: string;   // image URL for your badge
  href?: string; // optional link to docs/site
};

const badges: Badge[] = [
  { name: "TypeScript", src: "src/assets/typescript-icon.svg", href: "https://www.typescriptlang.org/" },
  { name: "React", src: "src/assets/react-icon.svg", href: "https://react.dev/" },
  { name: "Node.js", src: "src/assets/nodejs-icon.svg", href: "https://nodejs.org/" },
  { name: "JavaScript", src: "src/assets/javascript-icon.svg", href: "https://www.javascript.com/"},
  { name: "PostgreSQL", src: "src/assets/psql-icon.svg", href: "https://www.postgresql.org/" },
  { name: "GraphQL", src: "src/assets/graphql-icon.svg", href: "https://graphql.org/" },
  { name: "MongoDB", src: "src/assets/mongodb-icon.svg", href: "https://www.mongodb.com/" },
  { name: "C#", src: "src/assets/csharp-icon.svg", href: "https://learn.microsoft.com/dotnet/csharp/" },
  { name: "MonoGame", src: "src/assets/monogame-icon.svg", href: "https://www.monogame.net/" },
];

export default function HomeIntro() {
  return (
    <section className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-6"
      >
        <header className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Hey, I’m Scott!
          </h2>
          <p className="text-xl leading-8 text-gray-700 pb-1">I am a passionate and skilled software developer based out of the South Jersey area. My specialization is within the realm of web development, using Programming technologies like Typescript, React.js and CSS.</p>
          <p className="text-xl leading-8 text-gray-700 pb-1">I am proficient with database technologies like MongoDB and Postgres(SQL), and am experienced in creating full-stack web applications!</p>
          <p className="text-xl leading-8 text-gray-700 pb-1">I also enjoy writing C# in my free time, and am learing video game development with the MonoGame framework.</p>
          
        </header>
          <motion.button
          transition={{ duration: 0.35}}
          whileHover={{scale: 1.25}}
          ><a href="/projects"
            className="bg-primary text-secondary font-semibold rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-300">
            See My Projects
          </a>
          </motion.button>

        {/* Tech badges */}
        <div className="pt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 pt-1">
            Tech That I've worked with
          </h3>
          <ul
            className="mt-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            aria-label="Technology badges"
          >
            {badges.map((b) => {
              const img = (
                <img
                  src={b.src}
                  alt={b.name}
                  title={b.name}
                  className="h-8 w-auto mx-auto"
                  loading="lazy"
                />
              );

              return (
                <li key={b.name}>
                  {b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center rounded-xl border border-gray-200 bg-white/70 px-3 py-2 backdrop-blur
                                 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm"
                    >
                      {img}
                    </a>
                  ) : (
                    <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white/70 px-3 py-2">
                      {img}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}