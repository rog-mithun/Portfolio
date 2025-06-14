// =================  src/components/Certifications.jsx  =================
import { motion } from 'framer-motion';
import { FaMobileAlt, FaShieldAlt, FaBug, FaRobot } from 'react-icons/fa';
import SparkleBackground from './SparkleBackground';

const certs = [
  {
    title: "Mobile App Development – PSG Tech",
    icon: <FaMobileAlt className="text-pink-400 drop-shadow-[0_0_6px_rgba(255,100,200,0.8)] text-3xl" />,
    direction: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }
  },
  {
    title: "Cybersecurity & Ethical Hacking – Anna University",
    icon: <FaShieldAlt className="text-red-400 drop-shadow-[0_0_6px_rgba(255,80,80,0.8)] text-3xl" />,
    direction: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }
  },
  {
    title: "Incident Response & Threat Hunting – CIT",
    icon: <FaBug className="text-green-400 drop-shadow-[0_0_6px_rgba(100,255,100,0.8)] text-3xl" />,
    direction: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } }
  },
  {
    title: "Machine Learning Internship – eArbor LLP",
    icon: <FaRobot className="text-yellow-300 drop-shadow-[0_0_6px_rgba(255,255,100,0.8)] text-3xl" />,
    direction: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } }
  }
];

export default function Certifications() {

  return (
    <section id="certifications" className="scroll-mt-28 py-24 px-6 relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <SparkleBackground />
      <div className="absolute inset-0 bg-[url('/particles.svg')] bg-cover opacity-70 animate-fade-in pointer-events-none z-0" />

      <h2 className="text-5xl font-bold text-center mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-text-glow">
        Certifications
      </h2>
      <p className="text-center text-white/60 mb-12 italic text-lg">Learning & Recognition</p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={cert.direction.initial}
            whileInView={cert.direction.animate}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative rounded-3xl p-6 border border-white/10 shadow-2xl bg-gray-800/90 overflow-hidden backdrop-blur-md transform-style-preserve-3d group hover:shadow-yellow-300/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent)] animate-pulse pointer-events-none" />
            <div className="absolute w-full h-full bg-[url('/particles.svg')] bg-cover bg-center opacity-10 z-0 animate-fade-in" />

            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="animate-glow-icon group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <p className="text-lg font-medium text-white drop-shadow-md group-hover:animate-shimmer-on-hover">
                {cert.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
