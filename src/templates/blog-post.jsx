import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
};

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteMetadata = data.site.siteMetadata;
  
  const blogPostUrl = `${siteMetadata.siteUrl}${post.fields.slug}`;
  const keywords = [
    'Liza Katz',
    'AI',
    'Machine Learning',
    'Search',
    'Elasticsearch',
    'OpenSearch',
    'RAG',
    'Embeddings',
    'Software Engineering'
  ];

  // Structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.frontmatter.title,
    "description": post.frontmatter.description || post.excerpt,
    "image": `${siteMetadata.siteUrl}/social.jpg`,
    "author": {
      "@type": "Person",
      "name": siteMetadata.name,
      "url": siteMetadata.siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": siteMetadata.name,
      "url": siteMetadata.siteUrl
    },
    "datePublished": post.frontmatter.dateRaw,
    "dateModified": post.frontmatter.dateRaw,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogPostUrl
    },
    "url": blogPostUrl
  };

  return (
    <Layout>
      <Header metadata={siteMetadata} />
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={keywords}
        canonical={blogPostUrl}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>
        Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
      </p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateRaw: date
        description
      }
    }
  }
`;
