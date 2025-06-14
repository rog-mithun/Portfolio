// =================== src/components/ProfileCards.jsx (Enhanced Design with Background Animation) ===================
import { experience } from '../data/experience';
import { education } from '../data/education';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Profile() {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const canvas = sparkleRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = Array.from({ length: 60 }, () => createParticle());

    function createParticle() {
      const size = Math.random() * 2 + 1;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: size,
        opacity: Math.random() * 0.70 + 0.70,
        shape: Math.floor(Math.random() * 4)
      };
    }

    function drawParticle(p) {
      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = ['#fff', '#ff66c4', '#00f0ff', '#ffff66'][p.shape];
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        drawParticle(p);
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <section id="profile" className="scroll-mt-28 py-24 px-6 relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <canvas ref={sparkleRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/particles.svg')] bg-cover opacity-70 animate-fade-in pointer-events-none z-0" />

      <h2 className="text-5xl font-bold text-center mb-16 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-text-glow relative z-10">
        Profile Highlights
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 hover:bg-white/10 transition rounded-2xl p-8 border border-white/10 backdrop-blur-md shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-full text-xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide">Education</h3>
          </div>
          {education.map((edu) => (
            <div key={edu.degree} className="mb-6">
              <h4 className="text-xl font-bold text-white/90 mb-1">{edu.degree}</h4>
              <p className="text-sm italic text-white/70 mb-1">{edu.institution} – {edu.period}</p>
              {edu.cgpa && <p className="text-sm text-white/60 flex items-center gap-2"><FaFileAlt className="text-purple-400" /> CGPA: {edu.cgpa}</p>}
              {edu.score && <p className="text-sm text-white/60 flex items-center gap-2"><FaFileAlt className="text-purple-400" /> Score: {edu.score}</p>}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 hover:bg-white/10 transition rounded-2xl p-8 border border-white/10 backdrop-blur-md shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-cyan-500 to-sky-500 text-white p-3 rounded-full text-xl">
              <FaBriefcase />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide">Experience</h3>
          </div>
          {experience.map((exp) => (
            <div key={exp.role} className="mb-6">
              <h4 className="text-xl font-bold text-white/90 mb-1">{exp.role}</h4>
              <p className="text-sm italic text-white/70 mb-1">{exp.company} – {exp.period}</p>
              <ul className="text-white/60 text-sm mt-1 space-y-1">
                {exp.description.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-teal-400 mt-1" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
