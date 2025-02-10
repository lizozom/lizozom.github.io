import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1 item-link',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, image_link = null, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link} target='_blank'>{name}</Link>;
  } else {
    linkContent = <a href={link} target="_blank">{name}</a>;
  }

  return (
      <div className={classes.wrapper}>
        <h3
          className={`${classes.name} ${
            link ? 'hover:underline hover:text-black' : ''
          }`}
        >
          {link ? linkContent : name}
        </h3>
        <div className="flex md:flex-row gap-2 flex-col">
        <p className={classes.description} dangerouslySetInnerHTML={{__html: description}} ></p>
        {image_link && <img src={image_link} alt={name} className="md:h-[120px] w-auto md:max-w-[160px] object-contain" />}
      </div>
      </div>
  );
};

export default SummaryItem;
