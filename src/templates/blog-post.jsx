import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Helmet } from 'react-helmet';

import CVHeader from '../components/cv-header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  container: 'container mx-auto px-4 md:px-8 max-w-4xl',
  header: 'mt-8 mb-12',
  title: 'text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight',
  metaWrapper: 'flex flex-wrap gap-4 items-center text-sm',
  date: 'text-gray-600 font-medium',
  author: 'text-gray-700 font-medium',
  separator: 'text-gray-400',
  content: 'prose prose-lg prose-gray max-w-none mb-16 blog-content',
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
      "name": post.frontmatter.author || siteMetadata.name,
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
      <CVHeader metadata={siteMetadata} />
      <SEO 
        title={`${post.frontmatter.title} by ${post.frontmatter.author || siteMetadata.name}`}
        description={post.frontmatter.description || post.excerpt}
        keywords={keywords}
        canonical={blogPostUrl}
        disableSiteTitleAppend
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className={classes.container}>
        <article>
          <header className={classes.header}>
            <h1 className={classes.title}>{post.frontmatter.title}</h1>
            <div className={classes.metaWrapper}>
              <time className={classes.date}>
                {moment(post.frontmatter.date).format('MMMM D, YYYY')}
              </time>
              {post.frontmatter.author && (
                <>
                  <span className={classes.separator}>•</span>
                  <span className={classes.author}>
                    By {post.frontmatter.author}
                  </span>
                </>
              )}
            </div>
          </header>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
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
        author
      }
    }
  }
`;
