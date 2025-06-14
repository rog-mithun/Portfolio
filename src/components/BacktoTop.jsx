/* =================  src/components/BackToTop.jsx  ================= */
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
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-md z-50 hover:opacity-90"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}
