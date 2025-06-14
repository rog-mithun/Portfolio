/* =================  src/App.jsx (FINALIZED) ================= */
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BacktoTop.jsx";
import FadeInSection from "./components/FadeInSection.jsx";
import Certifications from "./components/Certifications.jsx";
import BlobBackground from "./components/BlobBackground.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0a0f1c] text-white bg-[url('/particles.svg')] bg-fixed bg-cover">
      <Header />
      <BlobBackground />

      {/* Floating blur background effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-[120vw] h-[120vw]"></div>

      <main className="relative z-10">
        <About />
        <FadeInSection delay={0.1}><Profile /></FadeInSection>
        <FadeInSection delay={0.2}><Skills /></FadeInSection>
        <FadeInSection delay={0.3}><Projects /></FadeInSection>
        <FadeInSection delay={0.4}><Achievements /></FadeInSection>
        <FadeInSection delay={0.5}><Certifications /></FadeInSection>
        <FadeInSection delay={0.6}><Contact /></FadeInSection>
      </main>

      <BackToTop />
    </div>
  );
}