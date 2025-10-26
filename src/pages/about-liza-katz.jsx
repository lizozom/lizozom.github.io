import { graphql } from 'gatsby';
import React from 'react';

import CVHeader from '../components/cv-header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  container: 'container mx-auto px-4 md:px-8 max-w-4xl mb-16',
  header: 'mt-8 mb-8',
  title: 'text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight',
  section: 'mt-12 mb-48',
  sectionTitle: 'text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4',
  text: 'text-gray-700 leading-relaxed text-base md:text-lg mb-4',
  aboutContent: 'text-gray-700 leading-relaxed text-base md:text-lg prose prose-lg max-w-none',
};

const AboutPage = ({ data }) => {
  const siteMetadata = data?.site?.siteMetadata || {};

  const siteUrl = siteMetadata?.siteUrl;
  return (
    <Layout>
      <SEO 
        title="About Liza Katz" 
        description="Learn more about Liza Katz - AI/ML engineer, speaker, and workshop instructor specializing in search, embeddings, and RAG systems."
        canonical={`${siteUrl}/about-liza-katz/`}
        keywords={['Liza Katz','About','AI Engineer','GenAI','RAG','Search','Speaker','Workshop Instructor']}
      />
      <CVHeader metadata={siteMetadata} />
      
      <div className={classes.container}>
        <article>          
          <section className={classes.section}>
            <div className={classes.aboutContent} dangerouslySetInnerHTML={{__html: siteMetadata.about}} />
          </section>

        </article>
      </div>
    </Layout>
  );
};

export default AboutPage;

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
      }
    }
  }
`;
