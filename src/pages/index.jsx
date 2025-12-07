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
    'lizozom',
    'Liza K',
    'Liza Katz lizozom',
    'Full Stack Developer',
    'AI Engineer',
    'GenAI Consultant',
    'AI Consultant',
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
    'Hybrid Search',
    'Semantic Search',
    'Vector Search',
    'AI Agents',
    'Ex-Elastic',
    'Software Engineer',
    'Team Lead',
    'Public Speaker',
    'Technical Speaker',
    'AI Workshop',
    'GenAI Training',
    'Webby Award Winner',
    'Google AI Hackathon Winner'
  ];

  return (
    <Layout>
      <SEO 
        title="Liza Katz (lizozom) - AI Engineer & GenAI Consultant"
        description="Liza Katz, also known as lizozom, is an AI Engineer and GenAI Consultant specializing in RAG, LLMs, and search technologies. Available for consulting, public speaking, and workshops."
        keywords={seoKeywords}
        image={data.site.siteMetadata.image}
        disableSiteTitleAppend={true}
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
        subtitle
        image
        about
        author
        github
        stackoverflow
        linkedin
        projects {
          id
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
