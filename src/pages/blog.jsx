import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import CVHeader from '../components/cv-header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const posts = data?.allMarkdownRemark?.edges || [];
  const noBlog = !posts || !posts.length;

  const rawSiteUrl = data?.site?.siteMetadata?.siteUrl || '';
  const siteUrl = rawSiteUrl.replace(/\/$/, '');
  return (
    <Layout>
      <SEO 
        title="Blog" 
        description="Articles and technical posts by Liza Katz on Generative AI, RAG, search engineering, and practical software development."
  canonical={`${siteUrl}/blog/`}
        keywords={[
          'Liza Katz',
          'Blog',
          'GenAI',
          'RAG',
          'Search',
          'Elasticsearch',
          'OpenSearch',
          'AI Engineering',
          'Software Development'
        ]}
      />
      <CVHeader metadata={data.site.siteMetadata} />
      {noBlog ? (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p>No blog posts available yet. Check back soon!</p>
        </div>
      ) : (
        <BlogPosts posts={posts} />
      )}
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
  siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
