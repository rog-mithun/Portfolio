/* =================  src/components/BlobBackground.jsx  ================= */
export default function BlobBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-[80vw] h-[80vw] bg-blue-300 dark:bg-indigo-800 opacity-10 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-purple-300 dark:bg-purple-700 opacity-10 blur-[80px] rounded-full animate-pulse"></div>
    </div>
  );
}