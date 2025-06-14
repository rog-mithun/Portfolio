import { useEffect, useRef } from 'react';

export default function SparkleBackground() {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const canvas = sparkleRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const PARTICLE_COUNT = 150; // Increased from 60 to 150
    let particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle());

    function createParticle() {
      const size = Math.random() * 1.8 + 0.8; // Slightly smaller range for better effect
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2, // Increased speed
        vy: (Math.random() - 0.5) * 1.2,
        radius: size,
        opacity: Math.random() * 0.7 + 0.7, // Balanced opacity
        shape: Math.floor(Math.random() * 4)
      };
    }

    function drawParticle(p) {
      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = ['#ffffff', '#ff66c4', '#00f0ff', '#ffff66'][p.shape];
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        drawParticle(p);
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={sparkleRef}
      className="absolute inset-0 w-full h-full opacity-25 z-0 pointer-events-none"
    />
  );
}
