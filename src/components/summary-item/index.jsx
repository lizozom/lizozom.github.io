import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-8 pb-6 border-b border-gray-100 last:border-b-0',
  wrapperFirst: 'mb-8 pb-6 border-b border-gray-100 last:border-b-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-sm',
  name: 'text-xl font-semibold text-gray-900 leading-tight mb-2 item-link',
  description: 'text-gray-700 leading-relaxed',
  date: 'text-sm text-gray-500 font-medium mb-3',
};

const SummaryItem = ({ name, description, link = false, image_link = null, internal = false, date = null, isFirstPost = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link} target='_blank'>{name}</Link>;
  } else {
    linkContent = <a href={link} target="_blank">{name}</a>;
  }

  const wrapperClass = isFirstPost ? classes.wrapperFirst : classes.wrapper;

  return (
      <article className={wrapperClass}>
        <div className="mb-3">
          {date && <time className={classes.date}>{date}</time>}
          <h3
            className={`${classes.name} ${
              link ? 'hover:text-blue-600 transition-colors duration-200' : ''
            }`}
          >
            {link ? linkContent : name}
          </h3>
        </div>
        <div className="flex md:flex-row gap-4 flex-col">
          <div className="flex-1">
            <p className={classes.description} dangerouslySetInnerHTML={{__html: description}} />
          </div>
          {image_link && (
            <div className="md:w-40 w-full flex-shrink-0">
              <img 
                src={image_link} 
                alt={name} 
                className="w-full h-24 md:h-28 object-contain rounded-lg shadow-sm" 
              />
            </div>
          )}
        </div>
      </article>
  );
};

export default SummaryItem;
