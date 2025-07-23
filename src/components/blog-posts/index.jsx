import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <Section title="Blog Posts">
      <div className="space-y-0">
        {posts.map((post, index) => (
          <SummaryItem
            key={post.node.fields.slug}
            name={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            link={post.node.fields.slug}
            date={post.node.frontmatter.date}
            image_link={post.node.frontmatter.image}
            isFirstPost={index === 0}
            internal
          />
        ))}
      </div>
    </Section>
  );
};

export default BlogPosts;
