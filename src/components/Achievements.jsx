// =================  src/components/Achievements.jsx  =================
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import SparkleBackground from './SparkleBackground';

const achievements = [
  {
    title: "AI Workshop Lead",
    subtitle: "Empowering Educators with AI",
    desc: "Led a hands-on AI workshop impacting 150+ teachers on integrating AI tools in curriculum design and pedagogy.",
    date: "2024",
    icon: <FaChalkboardTeacher className="text-green-400 drop-shadow-[0_0_6px_rgba(100,255,100,0.7)]" />,
    category: "Leadership",
    link: "https://www.linkedin.com/posts/mithunsankar-s_techforgood-aieducation-googledevelopersgroup-activity-7134581691548897280-OVf3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESugcABgRmqHolIYzWVl8YDvUHVJGJTiz4"
  },
  {
    title: "Runner-Up - GDSC Googleathon",
    subtitle: "Generative AI Challenge",
    desc: "Secured 2nd Runner-Up in a nationwide competition using GenAI models and APIs to solve real-world tasks.",
    date: "2023",
    icon: <FaMedal className="text-red-400 drop-shadow-[0_0_6px_rgba(255,100,100,0.7)]" />,
    category: "Awards",
    link: "https://www.linkedin.com/posts/mithunsankar-s_googleathon-googeathon2-gdscsns-activity-7133863712188239872-X006?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESugcABgRmqHolIYzWVl8YDvUHVJGJTiz4"
  },
   {
    title: "Top 50 in IoT Challenge",
    subtitle: "Technovation, Anna University",
    desc: "Selected as one of the Top 50 performers in embedded systems at a state-level competition organized by Anna University.",
    date: "2023",
    icon: <FaTrophy className="text-yellow-400 drop-shadow-[0_0_6px_rgba(255,255,0,0.7)]" />,
    category: "Awards",
    link: "https://drive.google.com/file/d/1CF8xiDWS7VBzU3FKlkl_Lsf-qVvNcg-N/view?usp=drive_link"
  },
  {
    title: "Founder - CODEX Club",
    subtitle: "Innovation Club for Students & Faculty",
    desc: "Established an innovation hub fostering peer-to-peer learning and AI/ML workshops for the academic community.",
    date: "2022",
    icon: <FaUsers className="text-blue-400 drop-shadow-[0_0_6px_rgba(100,200,255,0.7)]" />,
    category: "Leadership",
    link: "https://www.linkedin.com/posts/m-sc-artificial-intelligence-and-machine-learning-cit_empowering-education-through-ai-education-ugcPost-7133118628949807104-hOXZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESugcABgRmqHolIYzWVl8YDvUHVJGJTiz4"
  },
  
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-28 py-24 px-6 relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated Background */}
      <SparkleBackground />
      <h2 className="text-5xl font-bold text-center mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-text-glow">
        Achievements
      </h2>
      <p className="text-center text-white/60 mb-12 italic text-lg">Milestones of Impact</p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative rounded-3xl p-8 border border-white/10 shadow-2xl bg-gray-800/90 overflow-hidden backdrop-blur-lg transform-style-preserve-3d group hover:shadow-yellow-400/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent)] animate-pulse pointer-events-none" />
            <div className="absolute w-full h-full bg-[url('/particles.svg')] bg-cover bg-center opacity-60 z-0 animate-fade-in" />

            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="text-5xl animate-glow-icon group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-md group-hover:animate-shimmer-on-hover">
                {item.title}
              </h3>
              <p className="italic text-white/70 text-sm">{item.subtitle}</p>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                {item.desc}
              </p>
              <span className="text-xs text-white/50 mt-2">{item.date}</span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 text-sm bg-white text-black font-semibold rounded-full hover:bg-yellow-300 hover:shadow-md transition"
              >
                Read More
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
