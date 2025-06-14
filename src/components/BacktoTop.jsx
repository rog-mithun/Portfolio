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
        className="fixed bottom-4 right-4 md:right-6 bg-blue-500 text-white p-3 rounded-full shadow-md z-50 hover:opacity-90 transition-transform transform hover:scale-105"
        aria-label="Back to top"
        style={{
          maxWidth: "48px",
          maxHeight: "48px",
          width: "12vw",
          height: "12vw",
          minWidth: "40px",
          minHeight: "40px",
          boxSizing: "border-box"
        }}
      >
        <FaArrowUp className="text-sm sm:text-base" />
      </button>
    )
  );
}
