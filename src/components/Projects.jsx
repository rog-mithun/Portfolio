// ================= src/components/Projects.jsx (Redesigned Project Section with Category Cards + Filters + New Projects) =================
import { useState } from 'react';
import { FaCode, FaBolt, FaChartLine, FaExternalLinkAlt, FaSeedling, FaMapMarkedAlt, FaCarSide, FaMoneyBillWave, FaLaptopCode, FaTshirt, FaNetworkWired, FaBoxes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SparkleBackground from './SparkleBackground';

const allProjects = [
  {
    name: "SkillMorph AI",
    desc: "Generative career simulator with talking avatar video reports using Streamlit + Gemini + SadTalker.",
    category: "AI/ML",
    link: "https://github.com/rog-mithun/Skillmorph-AI",
    icon: <FaCode />, 
    bg: "from-purple-600 to-indigo-600"
  },
  {
    name: "Customer Assistant",
    desc: "RL Multi-turn DQN chatbot with BERT embeddings, voice I/O, deployed on Streamlit.",
    category: "AI/ML",
    link: "https://github.com/rog-mithun/RL-Customer-Assistant",
    icon: <FaBolt />, 
    bg: "from-blue-600 to-cyan-500"
  },
  {
    name: "Solar Site Optimizer",
    desc: "PSO-based solar plant placement optimizer using FastAPI + React + Leaflet visual map.",
    category: "Optimization",
    link: "https://github.com/rog-mithun/Solar-Site-Optimizer",
    icon: <FaChartLine />, 
    bg: "from-teal-500 to-emerald-500"
  },
  {
    name: "ScalpScript",
    desc: "Pine Script indicators for Nifty scalping with VWMA/EMA and VHF/VMA strategies.",
    category: "Trading",
    link: "https://github.com/rog-mithun/ScalpScript",
    icon: <FaBolt />, 
    bg: "from-yellow-500 to-orange-500"
  },
  {
    name: "AgriBot",
    desc: "AI chatbot assistant for farmers: weather, crop care, and multilingual query support via ChatGPT + APIs.",
    category: "AgriTech",
    link: "https://github.com/rog-mithun/AgriBot-AI-Farming-Assistant",
    icon: <FaSeedling />, 
    bg: "from-green-600 to-lime-500"
  },
  {
    name: "Traveling Salesman Route Optimizer",
    desc: "Solves TSP using Haversine logic with Leaflet-based UI. Shows optimal route with distance calculation.",
    category: "Optimization",
    link: "https://github.com/rog-mithun/Traveling-Salesman-Route-Optimizer",
    icon: <FaMapMarkedAlt />, 
    bg: "from-pink-500 to-fuchsia-600"
  },
  {
    name: "DriveMaster",
    desc: "Driving school management platform built with Docker/Kubernetes design and responsive frontend.",
    category: "Web App",
    link: "https://github.com/rog-mithun/DriveMaster",
    icon: <FaCarSide />, 
    bg: "from-rose-500 to-amber-500"
  },
  {
    name: "Loan Approval Predictor",
    desc: "Gradio-powered app to predict loan approval using ML classifiers like SVM, RF, and KNN.",
    category: "AI/ML",
    link: "https://github.com/rog-mithun/Loan-Approval-Prediction",
    icon: <FaMoneyBillWave />, 
    bg: "from-indigo-500 to-violet-600"
  },
  {
    name: "Netpulse",
    desc: "Java-based real-time client-server app for analyzing jitter, latency, and network bandwidth.",
    category: "Networking",
    link: "https://github.com/rog-mithun/Netpulse",
    icon: <FaNetworkWired />,
    bg: "from-gray-600 to-blue-400"
  },
  {
    name: "OptiPack",
    desc: "3D bin packing app with visual and JSON output using Python + Matplotlib. REST API tested with Postman.",
    category: "Logistics",
    link: "https://github.com/rog-mithun/OptiPack",
    icon: <FaBoxes />,
    bg: "from-yellow-600 to-lime-400"
  },
  {
    name: "Smart Textile Monitor",
    desc: "IoT system using BH1750 sensors and ESP32 to reduce idle time in textile machinery.",
    category: "IoT",
    link: "https://github.com/rog-mithun/IOT-Textile-Monitoring",
    icon: <FaTshirt />,
    bg: "from-red-500 to-orange-400"
  },
  {
    name: "Drivin – Traffic Assistant",
    desc: "Chatbot + OCR + analytics platform for traffic and license management using Flask, EasyOCR, PowerBI.",
    category: "Web App",
    link: "https://github.com/rog-mithun/Drive-in",
    icon: <FaCarSide />,
    bg: "from-sky-600 to-blue-600"
  },
  {
  name: "My Portfolio",
  desc: "Modern animated developer portfolio with sparkle background effects, category tabs, and project filters.",
  category: "Web App",
  link: "https://github.com/rog-mithun/Portfolio",
  icon: <FaLaptopCode />,
  bg: "from-indigo-700 to-purple-700"
  }
];

const categories = ['All', 'AI/ML', 'Optimization', 'Trading', 'AgriTech', 'Web App', 'Networking', 'Logistics', 'IoT'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-19.9 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
       {/* Animated Background */}
                  <SparkleBackground />
      <h2 className="text-5xl font-bold text-center mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-text-glow">
        Project Highlights
      </h2>

      <div className="flex justify-center gap-3 flex-wrap mb-12 px-4">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white ring-2 ring-offset-2 ring-blue-400 animate-pulse'
                : 'bg-white/10 text-white hover:bg-blue-500/80 hover:text-white'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <AnimatePresence mode="wait">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 shadow-lg bg-gradient-to-br ${project.bg} relative overflow-hidden hover:scale-[1.03] transition-transform`}
            >
              <div className="text-white text-3xl mb-3">{project.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-white/90 text-sm leading-snug mb-4">{project.desc}</p>
              <div className="flex justify-between items-center text-sm text-white/80">
                <span className="px-2 py-1 rounded-full bg-white/10 border border-white/20 font-medium">
                  {project.category}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-white/90"
                >
                  GitHub <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
