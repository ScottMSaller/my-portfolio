import { motion } from 'framer-motion';
import HomeIntro from '../Components/HomeIntro';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container pt-3 max-w-screen-2xl mx-auto flex flex-col items-center w-full px-6 sm:px-8"
    >
      <h1 className="page-title mb-12 text-center">Building Web & Game Experiences | Scott Saller</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        <HomeIntro />
        {/* <div className="space-y-6 flex flex-col items-start text-left pr-4">
          <h2 className="text-4xl font-semibold mb-2">Hey, I'm Scott!</h2>
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
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.1 }}
            className="bg-primary text-secondary font-semibold px-8 py-3 rounded-lg hover:bg-accent transition-colors duration-200 mt-4 self-start"
          >
            See My Projects
          </motion.button>
        </div> */}

        {/* RIGHT: gallery column */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-3
            auto-rows-[220px] md:auto-rows-[250px]
            overflow-hidden
          "
        >
          {/* r1 c1 — LEFT TOP */}
          <div className="rounded-lg border overflow-hidden flex items-center justify-center md:col-span-1 md:row-span-1 shadow-md">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="src/assets/bunker.jpg"
              alt="Photo of me"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          {/* r1-2 c2 — RIGHT TALL */}
          <div className="rounded-lg border overflow-hidden flex items-center justify-center md:col-span-1 md:row-span-2 shadow-md">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="src/assets/elden-build-planner.PNG"
              alt="Desk setup"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          {/* r2 c1 — LEFT MIDDLE */}
          <div className="rounded-lg border overflow-hidden flex items-center justify-center md:col-span-1 md:row-span-1 shadow-md">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="src/assets/marsh.jpg"
              alt="iOS app"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          {/* r3 c1-2 — BOTTOM WIDE */}
          <div className="rounded-lg border overflow-hidden flex items-center justify-center md:col-span-2 md:row-span-1 shadow-md">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="src/assets/trees.jpg"
              alt="Aerial photography"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
