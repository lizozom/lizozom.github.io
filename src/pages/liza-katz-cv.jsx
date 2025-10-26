import { graphql } from 'gatsby';
import React from 'react';

import CVHeader from '../components/cv-header';
import Layout from '../components/layout';
import SectionExperience from '../components/section-experience';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 container mx-auto px-4 md:px-8 max-w-7xl',
  title: 'mt-16 text-4xl md:text-5xl text-gray-900 font-bold mb-4',
  subtitle: 'text-xl text-gray-600 mb-12',
};

const CVPage = ({ data }) => {
  const siteMetadata = data?.site?.siteMetadata || {};
  const experience = siteMetadata?.experience || [];
  const siteUrl = siteMetadata?.siteUrl;

  const seoKeywords = [
    'Liza Katz CV',
    'Liza Katz Resume',
    'Work Experience',
    'Full Stack Developer',
    'AI Engineer',
    'GenAI Consultant',
    'Software Engineer',
    'Team Lead',
    'Ex-Elastic',
    'Career History'
  ];

  return (
    <Layout>
      <SEO 
        title="CV - Liza Katz" 
        description="Liza Katz's professional experience and career history as a Full-Stack Developer, AI Engineer, and GenAI Consultant."
        canonical={`${siteUrl}/liza-katz-cv/`}
        keywords={seoKeywords}
      />
      <CVHeader metadata={siteMetadata} />
      
        {experience && experience.length && (
          <SectionExperience experience={experience} />
        )}
    </Layout>
  );
};

export default CVPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        stackoverflow
        linkedin
        siteUrl
        experience {
          name
          description
          link
        }
      }
    }
  }
`;
