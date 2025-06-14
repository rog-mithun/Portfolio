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
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-primary text-white p-2 sm:p-3 rounded-full shadow-md z-50 hover:opacity-90 transition-transform transform hover:scale-105"
        aria-label="Back to top"
        style={{ maxWidth: 'calc(100vw - 1rem)' }} // ensures it's inside viewport
      >
        <FaArrowUp className="text-sm sm:text-base" />
      </button>
    )
  );
}
