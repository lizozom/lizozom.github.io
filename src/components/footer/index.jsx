import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mt-16 py-8 border-t border-gray-200 bg-gray-50',
  container: 'container mx-auto px-4',
  content: 'flex flex-col md:flex-row justify-between items-center',
  copyright: 'text-sm text-gray-600 mb-4 md:mb-0',
  links: 'flex space-x-6',
  link: 'text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200',
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.copyright}>
            © {currentYear} Liza Katz. All rights reserved.
          </p>
          <nav className={classes.links}>
            <Link className={classes.link} to="/liza-katz-cv">
              Experience
            </Link>
            <Link className={classes.link} to="/blog">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
