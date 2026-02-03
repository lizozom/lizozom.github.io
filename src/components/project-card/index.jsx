import React, { useState, useRef, useEffect } from 'react';

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E";

const classes = {
  card: 'group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200 hover:border-primary-300 hover:-translate-y-1 cursor-pointer',
  imageWrapper: 'relative h-48 overflow-hidden flex items-center justify-center p-6',
  image: 'max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500',
  imageOverlay: 'absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  badge: 'absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-accent-100 text-accent-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm',
  content: 'p-4',
  title: 'font-display text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2',
  description: 'text-neutral-600 leading-relaxed text-sm mb-4 line-clamp-3',
  // Overlay styles - crisp, minimal design
  overlayBackdrop: 'fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8',
  overlayCard: 'relative bg-white rounded-xl shadow-xl max-w-xl w-full max-h-[85vh] overflow-hidden border border-neutral-200',
  overlayImageWrapper: 'relative h-48 md:h-56 overflow-hidden flex items-center justify-center p-6',
  overlayImage: 'max-w-full max-h-full object-contain',
  overlayBadge: 'absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-accent-100 text-accent-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm',
  overlayContent: 'p-5 md:p-6',
  overlayTitle: 'font-display text-xl md:text-2xl font-bold text-neutral-900 mb-3',
  overlayDescription: 'text-neutral-600 text-sm md:text-base leading-relaxed mb-5 max-h-[30vh] overflow-y-auto',
  overlayLink: 'inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200 group/link',
  closeButton: 'absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all duration-200 z-10',
  arrow: 'w-4 h-4 ml-1.5 group-hover/link:translate-x-0.5 transition-transform duration-200',
};

const ProjectCard = ({ id, name, description, link, image_link, featured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const overlayRef = useRef(null);

  const isWinner = description.includes('Winner') || description.includes('Award');

  const getBackgroundColor = () => {
    const projectName = id ? id.toLowerCase() : name.toLowerCase();
    if (projectName.includes('ai21') || projectName.includes('max')) return 'bg-black';
    if (projectName.includes('tube uni')) return 'bg-[#fce9c4]';
    if (projectName.includes('moma') || projectName.includes('nayax') || projectName.includes('outburn')) return 'bg-white';
    if (projectName.includes('goods')) return 'bg-[#08142c]';
    return 'bg-gradient-to-br from-primary-50 to-primary-100';
  };

  const handleCardClick = () => {
    setIsExpanded(true);
  };

  const handleClose = (e) => {
    e?.stopPropagation();
    setIsExpanded(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  return (
    <>
      <article
        ref={cardRef}
        className={classes.card}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      >
        <div className={`${classes.imageWrapper} ${getBackgroundColor()}`}>
          {isWinner && <span className={classes.badge}>Award Winner</span>}
          <img
            src={image_link && image_link.length > 0 ? image_link : FALLBACK_IMAGE}
            alt={name}
            className={classes.image}
            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          />
          <div className={classes.imageOverlay} />
        </div>

        <div className={classes.content}>
          <h3 className={classes.title}>{name}</h3>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </article>

      {isExpanded && (
        <div
          ref={overlayRef}
          className={classes.overlayBackdrop}
          onClick={handleBackdropClick}
          style={{ animation: 'fadeIn 0.15s ease-out' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(16px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}} />

          <div
            className={classes.overlayCard}
            style={{ animation: 'slideUp 0.2s ease-out' }}
          >
            <button
              className={classes.closeButton}
              onClick={handleClose}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className={`${classes.overlayImageWrapper} ${getBackgroundColor()}`}>
              {isWinner && <span className={classes.overlayBadge}>Award Winner</span>}
              <img
                src={image_link && image_link.length > 0 ? image_link : FALLBACK_IMAGE}
                alt={name}
                className={classes.overlayImage}
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
              />
            </div>

            <div className={classes.overlayContent}>
              <h3 className={classes.overlayTitle}>{name}</h3>

              <div
                className={classes.overlayDescription}
                dangerouslySetInnerHTML={{ __html: description }}
              />

              {link && link.length > 0 && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.overlayLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Project
                  <svg className={classes.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
