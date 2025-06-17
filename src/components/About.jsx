import { FaFileDownload, FaCloud, FaLaptopCode, FaTools, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from '../assets/Mithunsankar.jpg';
import SparkleBackground from './SparkleBackground';

export default function About() {
  return (
    <section id="home" className="scroll-mt-28 pt-28 pb-28 px-8 relative bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center w-80 h-80"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-[2rem] shadow-xl w-80 h-80 object-cover z-10"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Mithunsankar 👋</h2>
          <p className="text-lg mb-6">
            Aspiring AI/ML engineer and full-stack developer with hands-on experience in ERP platforms and cloud-based systems. Passionate about building scalable systems, integrating intelligent automation, and thriving in cloud-first environments.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[{
              icon: <FaTools className="text-2xl" />, title: "4+ Domains", subtitle: "AI, Web, ERP, IoT"
            }, {
              icon: <FaCloud className="text-2xl" />, title: "Cloud Enthusiast", subtitle: "AWS, ERP, Deployments"
            }, {
              icon: <FaLaptopCode className="text-2xl" />, title: "10+ Projects", subtitle: "Real-world implementations"
            }].map((card, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-4 text-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-md hover:scale-105 hover:shadow-lg transition backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {card.icon}
                <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
                <p className="text-xs text-white/80">{card.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/public/Resume-Final.pdf"
              download="Mithunsankar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium shadow-lg hover:scale-105 hover:opacity-90 transition"
            >
              <FaFileDownload /> Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:scale-105 hover:opacity-90 transition"
            >
              <FaPaperPlane /> Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/mithunsankar-s/" target="_blank" className="text-xl hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rog-mithun" target="_blank" className="text-xl hover:text-pink-400">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-10 animate-bounce text-white text-xl opacity-60">
        ↓ Scroll to Explore
      </div>
    </section>
  );
}
