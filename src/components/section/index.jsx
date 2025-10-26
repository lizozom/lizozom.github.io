import React from 'react';

const classes = {
  outerWrapper: 'w-full scroll-mt-8',
  wrapper: 'block py-16 md:flex section-wrapper max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8',
  title: 'pb-8 md:w-full md:max-w-150 md:p-0 section-title',
  heading:
    'font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children, extraClass, id, background }) => {
  const backgroundClass = background || '';
  
  return (
    <div id={id} className={[classes.outerWrapper, backgroundClass].join(' ')}>
      <div className={[classes.wrapper, extraClass].join(' ')}>
        <div className={classes.title}>
          <h2 className={classes.heading}>{title}</h2>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
