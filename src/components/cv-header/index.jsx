import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import profileImg from '../../images/liza-katz-profile.jpg';
import Navigation from '../navigation';
import useMobileViewport from '../../hooks/useMobileViewport';

const classes = {
  wrapper: 'relative w-full overflow-hidden',
  canvas: 'absolute inset-0 w-full h-full',
  content: 'relative z-10 flex flex-col',
  navWrapper: 'w-full flex justify-center pt-8 pb-4 px-4',
  heroSection: 'w-full flex justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-10',
  container: 'flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl',
  imageWrapper: 'flex-shrink-0',
  image: 'w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:scale-105 hover:border-white/30',
  textContent: 'flex-1 text-center sm:text-left',
  name: 'font-display text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-1.5',
  subtitle: 'font-sans text-sm md:text-base text-white/90 leading-relaxed font-normal tracking-wide',
};

const CVHeader = ({ metadata }) => {
  const canvasRef = useRef(null);
  
  // Initialize mobile viewport handling
  useMobileViewport();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Particle system for subtle animation (fewer particles for header)
    const particles = [];
    const particleCount = 20;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Gradient background - matching the hero
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1e3a8a'); // Deep space blue
    gradient.addColorStop(0.5, '#312e81'); // Dark midnight
    gradient.addColorStop(1, '#1e1b4b'); // Almost black space

    function animate() {
      // Clear and draw gradient background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections between close particles
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <canvas ref={canvasRef} className={classes.canvas} />
      <div className={classes.content}>
        {/* Navigation */}
        <Navigation variant="cvHeader" />

        {/* Compressed hero content */}
        <div className={classes.heroSection}>
          <div className={classes.container}>
            <div className={classes.imageWrapper}>
              <Link to="/">
                <img
                  className={classes.image}
                  src={profileImg}
                  alt={metadata.name}
                />
              </Link>
            </div>
            <div className={classes.textContent}>
              <h1 className={classes.name}>
                <Link to="/" className="hover:text-white/90 transition-colors">
                  {metadata.name}
                </Link>
              </h1>
              <p className={classes.subtitle}>{metadata.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
