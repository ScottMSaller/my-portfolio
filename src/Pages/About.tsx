import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-container text-center"
        >
            <h1 className="page-title">About Me</h1>
            <p className="text-4xl pb-3 text-left font-bold">Hey, I’m Scott!</p>
            <p className="text-4xl pb-3">I’m a software engineer out of South Jersey who got into coding because I had ideas for apps that would make life easier. What started as a curiosity turned into a full-blown passion — I got hooked on object-oriented programming, fell in love with the syntax of languages like Java and C#, and never looked back.</p>

<p className="text-4xl pb-3">These days, I focus mostly on web development with tools like JavaScript, TypeScript, React, Express, and MongoDB (with plenty more in the stack). I love solving problems — if something’s broken or could be better, I’ll figure it out.</p>

<p className="text-4xl">Outside of coding, I’ve also done aerial photography, capturing surreal shots from a bird’s-eye view. Whether I’m building apps or snapping photos, I’m all about creating something unique.</p>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-secondary font-semibold mt-6 px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
          >
            Explore My Work
          </motion.button>
        </motion.div>
    )
}

export default About;