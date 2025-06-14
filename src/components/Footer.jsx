import SparkleBackground from './SparkleBackground';
export default function Footer() {
  return (
    <footer className="w-full text-center py-4 text-sm font-medium bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Animated Background */}
                          <SparkleBackground />
      © Designed & developed by <span className="font-semibold">Mithunsankar</span>
    </footer>
  );
}
