import React from 'react';

const classes = {
  card: 'group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 hover:border-primary-300 hover:-translate-y-1',
  imageWrapper: 'relative h-48 overflow-hidden flex items-center justify-center p-6',
  image: 'max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500',
  imageOverlay: 'absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  content: 'p-4',
  badge: 'inline-block bg-accent-100 text-accent-600 text-xs font-semibold px-3 py-1 rounded-full mb-3',
  title: 'text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors duration-200 line-clamp-2',
  description: 'text-neutral-600 leading-relaxed text-sm mb-4 line-clamp-3',
  link: 'inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200',
  arrow: 'w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200',
};

const ProjectCard = ({ id, name, description, link, image_link, featured = false }) => {
  // Extract if it's a Webby or Hackathon winner
  const isWinner = description.includes('Winner') || description.includes('Award');
  
  // Custom background colors for specific projects
  const getBackgroundColor = () => {
    const projectName = id ? id.toLowerCase() : name.toLowerCase();
    if (projectName.includes('ai21') || projectName.includes('max')) return 'bg-black';
    if (projectName.includes('tube uni')) return 'bg-[#fce9c4]'; // Warm beige from the logo
    if (projectName.includes('moma') || projectName.includes('nayax') || projectName.includes('outburn')) return 'bg-white';
    if (projectName.includes('goods')) return 'bg-[#08142c]'; // Dark blue
    return 'bg-gradient-to-br from-primary-50 to-primary-100'; // Default gradient
  };
  
  return (
    <article className={classes.card}>
      {image_link && (
        <div className={`${classes.imageWrapper} ${getBackgroundColor()}`}>
          <img 
            src={image_link} 
            alt={name}
            className={classes.image}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className={classes.imageOverlay} />
        </div>
      )}
      
      <div className={classes.content}>
        {isWinner && (
          <span className={classes.badge}>🏆 Award Winner</span>
        )}
        
        <h3 className={classes.title}>
          {name}
        </h3>
        
        <div 
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Visit
            <svg 
              className={classes.arrow}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
