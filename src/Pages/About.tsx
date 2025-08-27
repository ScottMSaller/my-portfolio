import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-container"
        >
            <h1 className="page-title">About Me</h1>
        </motion.div>
    )
}

export default About;