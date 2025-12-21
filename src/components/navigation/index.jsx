import React, { useState } from 'react';

const Navigation = ({ variant = 'hero' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If already on home page, smooth scroll
    const element = document.getElementById(sectionId);
    if (element) {
      try {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      } catch (error) {
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

  const classes = {
    // Desktop navigation
    nav: variant === 'hero' 
      ? 'hidden md:flex w-full justify-center gap-12 pt-8 pb-4 px-4'
      : 'hidden md:flex w-full justify-center gap-8 pt-8 pb-4 px-4',
    navLink: 'font-sans text-white/60 hover:text-white transition-all duration-300 text-sm uppercase tracking-[0.2em] font-medium cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full',
    
    // Mobile menu
    mobileMenuButton: 'md:hidden fixed top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/20',
    mobileMenu: 'md:hidden fixed inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#312e81] to-[#1e1b4b] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300',
    mobileNavLink: 'font-sans text-white/80 hover:text-white transition-all duration-300 text-2xl uppercase tracking-wide font-medium',
  };

  const menuItems = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'Speaking', action: () => scrollToSection('speaking') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Blog', action: () => scrollToSection('posts') },
    { label: 'About', href: '/about-liza-katz' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={classes.mobileMenuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={classes.mobileMenu}>
          {menuItems.map((item, index) => (
            item.href ? (
              <a
                key={index}
                href={item.href}
                className={classes.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <span
                key={index}
                className={classes.mobileNavLink}
                onClick={() => {
                  setMobileMenuOpen(false);
                  item.action();
                }}
                role="button"
                tabIndex={0}
              >
                {item.label}
              </span>
            )
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className={classes.nav}>
        {menuItems.map((item, index) => (
          item.href ? (
            <a
              key={index}
              href={item.href}
              className={classes.navLink}
            >
              {item.label}
            </a>
          ) : (
            <span
              key={index}
              className={classes.navLink}
              onClick={item.action}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && item.action()}
            >
              {item.label}
            </span>
          )
        ))}
      </nav>
    </>
  );
};

export default Navigation;
