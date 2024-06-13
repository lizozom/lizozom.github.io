import React from 'react';

const classes = {
  wrapper: 'block pt-12 md:flex section-wrapper',
  title: 'pb-6 md:w-full md:max-w-150 md:p-0 section-title',
  heading:
    'font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children, extraClass }) => {
  return (
    <div className={[classes.wrapper, extraClass].join(' ')}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
