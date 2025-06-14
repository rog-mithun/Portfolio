// ================= src/components/Contact.jsx =================
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion"; 
import SparkleBackground from './SparkleBackground';

export default function Contact() {

  const contacts = [
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:mithunsankarsivakumar@gmail.com",
      tip: "Send a message",
      glow: "hover:bg-green-600",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mithunsankar-s/",
      tip: "Let’s network",
      glow: "hover:bg-blue-700",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/rog-mithun",
      tip: "View my code",
      glow: "hover:bg-gray-800",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/_.mithun.___/",
      tip: "DM me",
      glow: "hover:bg-pink-600",
    },
    {
      icon: <FaX />,
      name: "X",
      url: "https://x.com/_m_i_t_h_u_n_",
      tip: "Let’s connect",
      glow: "hover:bg-sky-500",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      url: "https://www.facebook.com/mithunsankar.sivakumar",
      tip: "Say hi on FB",
      glow: "hover:bg-blue-600",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-24 px-6 relative bg-gradient-to-b from-gray-900 to-black text-white text-center overflow-hidden"
    >
      {/* Animated Background */}
      <SparkleBackground />

      <h2 className="text-5xl font-bold text-center mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-text-glow">
        Get in Touch
      </h2>
      <p className="mb-10 max-w-xl mx-auto text-white/80">
        Let’s build something amazing together!
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-6 relative z-10">
        {contacts.map(({ icon, name, url, tip, glow }, i) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className={`relative group w-16 h-16 rounded-full flex items-center justify-center border border-white/20 text-2xl transition transform hover:scale-110 ${glow}`}
            aria-label={name}
          >
            {icon}
            <span className="absolute -bottom-7 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {tip}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
