import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-md z-50 hover:opacity-90 transition-transform transform hover:scale-105"
        aria-label="Back to top"
        style={{
          right: 'clamp(1rem, 4vw, 1.5rem)', // keeps it inside screen on all sizes
        }}
      >
        <FaArrowUp className="text-base sm:text-lg" />
      </button>
    )
  );
}
