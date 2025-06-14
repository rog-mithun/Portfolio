// =================  src/components/Skills.jsx (with Animations + Gradient Glow + Color-coded Tags) =================
import {
  FaPython, FaJava, FaJs, FaReact, FaNode, FaDatabase,
  FaAws, FaStream, FaRobot, FaCogs, FaTools, FaDocker, FaLeaf, FaChartLine, FaCode
} from "react-icons/fa";
import {
  SiMongodb, SiPostgresql, SiCplusplus, SiR, SiTailwindcss,
  SiDialogflow, SiFastapi, SiOdoo, SiArduino, SiKubernetes
} from "react-icons/si";
import { motion } from "framer-motion";
import SparkleBackground from './SparkleBackground';

const skillCategories = [
  {
    title: "Languages",
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    skills: [
      { name: "Python", level: "Intermediate", info: "Used for ML, scripting, automation." },
      { name: "Java", level: "Basic", info: "Used in backend & OOP." },
      { name: "C++", level: "Intermediate", info: "Used in problem-solving and memory-level coding." },
      { name: "JavaScript", level: "Intermediate", info: "Used in frontend and interactivity." },
      { name: "SQL", level: "Intermediate", info: "Used in relational DBs and queries." },
      { name: "R", level: "Basic", info: "Used for statistical computing." }
    ]
  },
  {
    title: "Frameworks & Platforms",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
    skills: [
      { name: "FastAPI", level: "Intermediate", info: "High-performance APIs." },
      { name: "React", level: "Intermediate", info: "Component-based frontend framework." },
      { name: "Streamlit", level: "Intermediate", info: "For ML dashboards." },
      { name: "Dialogflow", level: "Intermediate", info: "Conversational interfaces." },
      { name: "Odoo", level: "Intermediate", info: "ERP platform experience." },
      { name: "TailwindCSS", level: "Basic", info: "Utility-first CSS styling." },
      { name: "Gradio", level: "Intermediate", info: "ML UI interface for model deployment." },
      { name: "Kubernetes", level: "Basic", info: "Cloud orchestration and deployment." }
    ]
  },
  {
    title: "Cloud & Databases",
    color: "bg-gradient-to-br from-indigo-500 to-sky-500",
    skills: [
      { name: "AWS", level: "Intermediate", info: "Cloud deployments & S3 usage." },
      { name: "MongoDB", level: "Intermediate", info: "NoSQL document database." },
      { name: "PostgreSQL", level: "Intermediate", info: "Relational DB with JSON support." }
    ]
  },
  {
    title: "IoT & Optimization",
    color: "bg-gradient-to-br from-emerald-500 to-teal-400",
    skills: [
      { name: "Arduino", level: "Basic", info: "Microcontroller hardware coding." },
      { name: "ESP32", level: "Basic", info: "WiFi + BLE IoT chip." },
      { name: "PSO", level: "Intermediate", info: "Swarm optimization algorithm." },
      { name: "BERT", level: "Intermediate", info: "Transformer-based NLP model." },
      { name: "NLP", level: "Intermediate", info: "Natural Language Processing pipeline." }
    ]
  },
  {
    title: "Finance & Trading",
    color: "bg-gradient-to-br from-amber-500 to-yellow-400",
    skills: [
      { name: "Pine Script", level: "Intermediate", info: "Used in TradingView for writing indicators and strategies." },
      { name: "TradingView", level: "Intermediate", info: "Platform for financial charting and technical analysis." }
    ]
  },
  {
    title: "Specialized Tech",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    skills: [
      { name: "Docker", level: "Basic", info: "Used for containerization in deployment." },
      { name: "Leaflet", level: "Intermediate", info: "Map rendering in location-based apps." },
      { name: "OCR", level: "Basic", info: "Used in license plate reading with EasyOCR." }
    ]
  }
];

const skillIcons = {
  Python: <FaPython />, Java: <FaJava />, "C++": <SiCplusplus />, JavaScript: <FaJs />, SQL: <FaDatabase />, R: <SiR />,
  React: <FaReact />, Streamlit: <FaStream />, FastAPI: <SiFastapi />, Dialogflow: <SiDialogflow />, Odoo: <SiOdoo />, TailwindCSS: <SiTailwindcss />,
  AWS: <FaAws />, MongoDB: <SiMongodb />, PostgreSQL: <SiPostgresql />,
  Arduino: <SiArduino />, ESP32: <FaCogs />, PSO: <FaTools />, BERT: <FaRobot />, NLP: <FaNode />,
  Docker: <FaDocker />, Leaflet: <FaLeaf />, OCR: <FaNode />, Kubernetes: <SiKubernetes />,
  "Pine Script": <FaCode />, TradingView: <FaChartLine />
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-19 py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated Background */}
            <SparkleBackground />
      <h2 className="text-5xl font-bold text-center mb-16 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-text-glow">
        Tech Stack
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {skillCategories.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-md hover:shadow-lg transition ${group.color}`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white/90">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map(({ name, level, info }) => (
                <span
                  key={name}
                  title={`${info} (Level: ${level})`}
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1 rounded-full text-white bg-white/10 hover:bg-white/20 transition shadow-md backdrop-blur-md cursor-help"
                >
                  {skillIcons[name] ?? "🛠️"} {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
