import React, { useEffect, useRef } from 'react';
import profileImg from '../../images/liza-katz-profile.jpg';

const classes = {
  wrapper: 'relative min-h-screen w-full overflow-hidden',
  canvas: 'absolute inset-0 w-full h-full',
  content: 'relative z-10 min-h-screen flex flex-col',
  nav: 'w-full flex justify-center gap-8 md:gap-12 pt-8 pb-4 px-4',
  navLink: 'font-sans text-white/60 hover:text-white transition-all duration-300 text-xs md:text-sm uppercase tracking-[0.2em] font-medium cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full',
  mainContent: 'flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20',
  container: 'max-w-7xl w-full mx-auto',
  grid: 'grid md:grid-cols-[400px_1fr] lg:grid-cols-[450px_1fr] gap-16 lg:gap-24 items-center',
  leftColumn: 'flex flex-col items-center justify-center space-y-8',
  rightColumn: 'flex flex-col justify-center space-y-6 max-w-2xl',
  imageWrapper: 'relative',
  image: 'w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-[6px] border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:scale-105 hover:border-white/30',
  socials: 'flex gap-5',
  socialLink: 'w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md transition-all duration-300 text-white hover:scale-110 border border-white/20',
  name: 'font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4',
  description: 'font-sans text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-normal tracking-wide',
  subtitle: 'font-sans italic text-base md:text-m lg:text-l text-white/90 leading-relaxed font-normal tracking-wide mt-1',
  ctaWrapper: 'flex flex-col sm:flex-row gap-4 mt-2',
  cta: 'font-sans inline-flex items-center justify-center gap-3 bg-white text-primary-500 px-9 py-3.5 rounded-full font-semibold text-base tracking-wide hover:bg-white/95 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:scale-105 hover:-translate-y-1',
};

// Social media SVG icons
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const StackOverflowIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
  </svg>
);

const Hero = ({ metadata }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system for subtle animation
    const particles = [];
    const particleCount = 50;

    // Floating emojis
    const emojis = ['🍌', '🐋', '🐱', '🔥', '🐘', '💻'];
    const floatingEmojis = emojis.map((emoji, index) => ({
      emoji,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speedX: parseFloat(((Math.random() - 0.5) * 0.2).toFixed(2)),
      speedY: parseFloat(((Math.random() - 0.5) * 0.2).toFixed(2)),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: parseFloat(((Math.random() - 0.5) * 0.01).toFixed(2)),
      size: 30 + Math.random() * 20,
      opacity: 0.4 + Math.random() * 0.15,
    }));

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

      // Update and draw floating emojis
      floatingEmojis.forEach((item) => {
        // Update position
        item.x += item.speedX;
        item.y += item.speedY;
        item.rotation += item.rotationSpeed;

        // Smooth boundary wrapping (no bounce, wrap around)
        const margin = 100;
        if (item.x < -margin) item.x = canvas.width + margin;
        if (item.x > canvas.width + margin) item.x = -margin;
        if (item.y < -margin) item.y = canvas.height + margin;
        if (item.y > canvas.height + margin) item.y = -margin;

        // Draw emoji
        ctx.save();
        ctx.globalAlpha = item.opacity;
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        ctx.font = `${item.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.emoji, 0, 0);
        ctx.restore();
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use both methods for better browser compatibility
      try {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      } catch (error) {
        // Fallback for older browsers
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <canvas ref={canvasRef} className={classes.canvas} />
      <div className={classes.content}>
        {/* Navigation at top */}
        <nav className={classes.nav}>
          <span
            className={classes.navLink}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('home')}
          >
            Home
          </span>
          <span
            className={classes.navLink}
            onClick={() => scrollToSection('speaking')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('speaking')}
          >
            Speaking
          </span>
          <span
            className={classes.navLink}
            onClick={() => scrollToSection('projects')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('projects')}
          >
            Projects
          </span>
          <span
            className={classes.navLink}
            onClick={() => scrollToSection('posts')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('posts')}
          >
            Posts
          </span>
          <a
            href="/liza-katz-cv"
            className={classes.navLink}
          >
            Experience
          </a>
        </nav>

        {/* Main hero content */}
        <div className={classes.mainContent}>
          <div className={classes.container}>
            <div className={classes.grid}>
              {/* Left Column - Image & Social */}
              <div className={classes.leftColumn}>
                <div className={classes.imageWrapper}>
                  <img className={classes.image} src={profileImg} alt={metadata.name} />
                </div>
                <div className={classes.socials}>
                  {metadata.linkedin && (
                    <a
                      className={classes.socialLink}
                      href={metadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {metadata.github && (
                    <a
                      className={classes.socialLink}
                      href={metadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {metadata.stackoverflow && (
                    <a
                      className={classes.socialLink}
                      href={metadata.stackoverflow}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Stack Overflow"
                      title="Stack Overflow"
                    >
                      <StackOverflowIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column - Text & CTA */}
              <div className={classes.rightColumn}>
                <div>
                  <h1 className={classes.name}>{metadata.name}</h1>
                  <p className={classes.description}>{metadata.description}</p>
                  {metadata.subtitle && (
                    <p className={classes.subtitle}>{metadata.subtitle}</p>
                  )}
                </div>
                <div className={classes.ctaWrapper}>
                  <a
                    href="mailto:liza.katz@gmail.com?subject=Let's Work Together"
                    className={classes.cta}
                  >
                    <span>Let's Work Together</span>
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
    </div>
  );
};

export default Hero;
