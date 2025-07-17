import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
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
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
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
      limit: 5
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
          }
        }
      }
    }
  }
`;
