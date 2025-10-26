import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const SEO = ({ description, lang, meta, title, keywords, image, canonical, disableSiteTitleAppend }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            name
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title
    ? (disableSiteTitleAppend ? title : `${title} | ${defaultTitle}`)
    : defaultTitle;
  const siteUrl = site.siteMetadata.siteUrl;
  const defaultImage = `${siteUrl}/social.jpg`;
  const metaImage = image || defaultImage;
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={finalTitle}
      link={[
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        ...(keywords && keywords.length > 0
          ? [{ name: `keywords`, content: keywords.join(`, `) }]
          : []),
        {
          name: `author`,
          content: site.siteMetadata.name,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          property: `og:title`,
          content: finalTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: canonicalUrl,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:alt`,
          content: `${site.siteMetadata.name} - ${site.siteMetadata.description}`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.name,
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          property: `twitter:title`,
          content: finalTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
        {
          name: `linkedin:owner`,
          content: site.siteMetadata.name,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: [],
  disableSiteTitleAppend: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  canonical: PropTypes.string,
  disableSiteTitleAppend: PropTypes.bool,
};

export default SEO;
