import React, { useEffect, useRef } from 'react';
import profileImg from '../../images/liza-katz-profile.jpg';
import Navigation from '../navigation';
import useMobileViewport from '../../hooks/useMobileViewport';

const classes = {
  wrapper: 'relative min-h-screen-mobile w-full overflow-hidden',
  canvas: 'absolute inset-0 w-full h-full',
  emojiContainer: 'absolute inset-0 w-full h-full pointer-events-none',
  content: 'relative z-10 min-h-screen-mobile flex flex-col',
  navWrapper: 'w-full flex justify-center pt-8 pb-4 px-4',
  mainContent: 'flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20',
  container: 'max-w-7xl w-full mx-auto',
  grid: 'grid md:grid-cols-[400px_1fr] lg:grid-cols-[450px_1fr] gap-8 lg:gap-24 items-center',
  leftColumn: 'flex flex-col items-center justify-center space-y-8',
  rightColumn: 'flex flex-col justify-center space-y-6 max-w-2xl',
  imageWrapper: 'relative',
  image: 'w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-[6px] border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:scale-105 hover:border-white/30',
  socials: 'flex gap-5',
  socialLink: 'w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md transition-all duration-300 text-white hover:scale-110 border border-white/20',
  name: 'font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4',
  description: 'font-sans text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-normal tracking-wide',
  subtitle: 'font-sans italic text-base md:text-m lg:text-l text-white/90 leading-relaxed font-normal tracking-wide mt-1',
  ctaWrapper: 'flex flex-col sm:flex-row gap-4 mt-2',
  cta: 'font-sans inline-flex items-center justify-center gap-3 bg-white text-primary-500 px-9 py-3.5 rounded-full font-semibold text-base tracking-wide hover:bg-white/95 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:scale-105 hover:-translate-y-1',
  artCredit: 'fixed bottom-6 right-6 z-20 text-right text-white/40 text-xs italic font-serif leading-tight',
};

const Hero = ({ metadata }) => {
  const canvasRef = useRef(null);
  
  // Initialize mobile viewport handling
  useMobileViewport();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system for subtle animation
    const particles = [];
    const particleCount = 50;

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

    // Gradient background - Deep space purple
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Floating emojis data
  const emojis = [
    { icon: '🍌', left: '10%', top: '15%', duration: 25, delay: 0, size: 1.5 },
    { icon: '🐋', left: '85%', top: '10%', duration: 30, delay: 2, size: 1.8 },
    { icon: '🐱', left: '20%', top: '90%', duration: 28, delay: 4, size: 1.3 },
    { icon: '🔥', left: '75%', top: '65%', duration: 26, delay: 1, size: 1.6 },
    { icon: '🐘', left: '50%', top: '85%', duration: 32, delay: 3, size: 1.9 },
    { icon: '💻', left: '45%', top: '25%', duration: 27, delay: 5, size: 1.5 },
  ];

  return (
    <div className={classes.wrapper}>
      <canvas ref={canvasRef} className={classes.canvas} />
      
      {/* CSS-animated floating emojis */}
      <div className={classes.emojiContainer}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0% { 
              transform: translate(0, 0) rotate(0deg); 
              opacity: 0.2;
            }
            25% { 
              transform: translate(20px, -30px) rotate(8deg); 
              opacity: 0.2;
            }
            50% { 
              transform: translate(-15px, -60px) rotate(-8deg); 
              opacity: 0.2;
            }
            75% { 
              transform: translate(-25px, -30px) rotate(5deg); 
              opacity: 0.2;
            }
            100% { 
              transform: translate(0, 0) rotate(0deg); 
              opacity: 0.2;
            }
          }
          
          .floating-emoji {
            position: absolute;
            display: inline-block;
            will-change: transform, opacity;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            transform: translateZ(0);
            animation: float linear infinite;
            opacity: 0.2;
          }
        `}} />
        {emojis.map((emoji, index) => (
          <span
            key={index}
            className="floating-emoji"
            style={{
              left: emoji.left,
              top: emoji.top,
              fontSize: `${emoji.size}rem`,
              animationDuration: `${emoji.duration}s`,
              animationDelay: `${emoji.delay}s`,
            }}
          >
            {emoji.icon}
          </span>
        ))}
      </div>
      
      <Navigation variant="hero" />
      
      <div className={classes.content}>
        {/* Navigation wrapper */}
        <div className={classes.navWrapper}>
          {/* Navigation component handles both mobile and desktop */}
        </div>

        {/* Main hero content */}
        <div className={classes.mainContent}>
          <div className={classes.container}>
            <div className={classes.grid}>
              {/* Left Column - Image */}
              <div className={classes.leftColumn}>
                <div className={classes.imageWrapper}>
                  <img className={classes.image} src={profileImg} alt={metadata.name} />
                </div>
              </div>

              {/* Right Column - Text & CTA */}
              <div className={classes.rightColumn}>
                <div>
                  <h1 className={classes.name}>{metadata.name}</h1>
                  <p className={classes.description} style={{marginBottom: '0.25rem'}}>{metadata.description}</p>
                  {metadata.subtitle && (
                    <p className={classes.subtitle}>{metadata.subtitle}</p>
                  )}
                </div>
                <div className={classes.ctaWrapper}>
                  <a
                    href="#projects"
                    className={classes.cta}
                  >
                    <span>View Projects</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Art Credit */}
      <div className={classes.artCredit}>
        <div>Lost in Embedding Space,</div>
        <div>by Liza K. & Claude S.</div>
      </div>
    </div>
  );
};

export default Hero;
