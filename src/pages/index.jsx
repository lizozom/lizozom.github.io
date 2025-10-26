import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Hero from '../components/hero';
import Layout from '../components/layout';
import SectionBlog from '../components/section-blog';
import SectionProjects from '../components/section-projects';
import SectionSpeaking from '../components/section-speaking';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  const seoKeywords = [
    'Liza Katz',
    'Full Stack Developer',
    'AI Engineer',
    'GenAI Consultant',
    'RAG',
    'Retrieval Augmented Generation',
    'LLM',
    'Large Language Models',
    'Elasticsearch',
    'OpenSearch',
    'Python',
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Machine Learning',
    'Search Optimization',
    'AI Agents',
    'Ex-Elastic',
    'Software Engineer',
    'Team Lead',
    'Webby Award Winner',
    'Google AI Hackathon Winner'
  ];

  return (
    <Layout>
      <SEO 
        title="Home"
        description="Liza Katz - Seasoned Full-Stack Developer & GenAI Consultant specializing in RAG, AI Agents, LLMs, and Search Optimization. Ex-Elastic engineer with Webby Award and Google AI Hackathon wins."
        keywords={seoKeywords}
      />
      <Hero metadata={data.site.siteMetadata} />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <SectionSpeaking />
        {projects && projects.length && <SectionProjects projects={projects} />}
        {!noBlog && <SectionBlog posts={posts} />}
      </div>
    </Layout>
  );
};

export default Index;

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
        projects {
          name
          description
          link
          image_link

        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`;
