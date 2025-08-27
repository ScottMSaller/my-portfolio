import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container"
    >
      <h1 className="page-title">Welcome to My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Hi, I'm Scott</h2>
          <p className="text-lg">
            I'm a passionate developer, specializing in web development with a focus on creating beautiful and functional web experiences. I enjoy C# and video game development with frameworks like MonoGame, and also enjoy capturing surreal moments with my aerial photography. 
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Explore My Work
          </motion.button>
        </div>
        <div className="relative h-64 md:h-full">
          <img src="/src/assets/marsh.jpg" alt="Scott Saller" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-primary opacity-10 rounded-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;