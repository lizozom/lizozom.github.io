import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold mb-8',
  section: 'mb-8',
  sectionTitle: 'text-2xl font-semibold text-gray-900 mb-4',
  text: 'text-gray-700 leading-relaxed mb-4',
  list: 'list-disc pl-6 text-gray-700 leading-relaxed',
  listItem: 'mb-2',
};

const AboutPage = ({ data }) => {
  const siteMetadata = data?.site?.siteMetadata || {};

  return (
    <Layout>
      <SEO 
        title="About Liza Katz" 
        description="Learn more about Liza Katz - AI/ML engineer, speaker, and workshop instructor specializing in search, embeddings, and RAG systems."
      />
      <Header metadata={siteMetadata} />
      
      <div className={classes.wrapper}>
        <h1 className={classes.title}>About Liza Katz</h1>
        
        <section className={classes.section}>
          <p className={classes.text} dangerouslySetInnerHTML={{__html: siteMetadata.about}} />
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Professional Background</h2>
          <p className={classes.text}>
            I'm a passionate AI/ML engineer with deep expertise in search technologies, embeddings, and Retrieval-Augmented Generation (RAG) systems. 
            My work focuses on building production-ready AI applications that solve real-world problems.
          </p>
          <p className={classes.text}>
            I'm available for public speaking engagements and private workshops, helping teams and organizations 
            understand and implement modern AI technologies.
          </p>
        </section>

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
      }
    }
  }
`;
