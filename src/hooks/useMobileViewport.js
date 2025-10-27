import { useEffect } from 'react';

const useMobileViewport = () => {
  useEffect(() => {
    const setVH = () => {
      // Calculate and set the viewport height
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVH();

    // Update on resize and orientation change
    const handleResize = () => {
      // Use a small delay to ensure the browser has finished resizing
      setTimeout(setVH, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Also listen for scroll on mobile to handle address bar show/hide
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVH();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Only add scroll listener on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
};

export default useMobileViewport;