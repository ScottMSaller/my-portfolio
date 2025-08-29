import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container p-0 pt-3 max-w-screen-xl mx-auto flex flex-col items-center text-center w-full max-w-screen-2xl mx-auto px-6 sm:px-8"
    >
      {/* Title centered */}
      <h1 className="page-title mb-8">Welcome to My Portfolio</h1>

      {/* Two column split, both centered */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center w-full">
        {/* LEFT: text column */}
        <div className="space-y-6 flex flex-col items-center">
          <h2 className="text-4xl font-semibold">Hey, I'm Scott!</h2>
          <p className="text-3xl">
            I am a passionate and skilled software developer based out of the South Jersey area.
          </p>
          <p className="text-3xl">
            My specialization is within the realm of web development, using Programming technologies like Typescript, React.js and CSS.
          </p>
          <p className="text-3xl">
            I am also proficient with database technologies like MongoDB and Postgres(SQL).
          </p>
          <p className="text-3xl">
            I enjoy C# and video game development with frameworks like MonoGame, and also enjoy capturing surreal moments with my aerial photography.
          </p>
          <motion.button
            whileHover={{ scale: 1.22 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Explore My Work
          </motion.button>
        </div>

        {/* RIGHT: gallery column */}
        <div
          className="
            grid gap-1
            grid-cols-1 md:[grid-template-columns:var(--c1,1fr)_var(--c2,1fr)]
            [grid-auto-rows:180px] md:[grid-auto-rows:220px]
            overflow-hidden
            transition-[grid-template-columns] duration-300
            has-[.tile-lt:hover]:md:[--c1:2fr] has-[.tile-lt:hover]:md:[--c2:1fr]
            has-[.tile-lm:hover]:md:[--c1:2fr] has-[.tile-lm:hover]:md:[--c2:1fr]
            has-[.tile-r:hover]:md:[--c1:1fr]   has-[.tile-r:hover]:md:[--c2:2fr]
            has-[.tile:hover]:[&_.tile:not(:hover)]:opacity-80
            has-[.tile:hover]:[&_.tile:not(:hover)]:scale-[0.98]
          "
        >
          {/* r1 c1 — LEFT TOP */}
          <div className="tile tile-lt rounded-lg border overflow-hidden flex items-center justify-center md:[grid-column:1] md:[grid-row:1] group">
            <img
              src="src/assets/bunker.jpg"
              alt="Photo of me"
              className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 origin-center"
            />
          </div>

          {/* r1-2 c2 — RIGHT TALL */}
          <div className="tile tile-r rounded-lg border overflow-hidden flex items-center justify-center md:[grid-column:2] md:[grid-row:1/span_2] group">
            <img
              src="src/assets/elden-build-planner.png"
              alt="Desk setup"
              className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 origin-top"
            />
          </div>

          {/* r2 c1 — LEFT MIDDLE */}
          <div className="tile tile-lm rounded-lg border overflow-hidden flex items-center justify-center md:[grid-column:1] md:[grid-row:2] group">
            <img
              src="src/assets/marsh.jpg"
              alt="iOS app"
              className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 origin-center"
            />
          </div>

          {/* r3 c1-2 — BOTTOM WIDE */}
          <div className="tile rounded-lg border overflow-hidden flex items-center justify-center md:[grid-column:1/span_2] md:[grid-row:3] group">
            <img
              src="src/assets/trees.jpg"
              alt="Aerial photography"
              className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110 origin-bottom"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
