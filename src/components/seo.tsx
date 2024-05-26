import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    author
  } = useSiteMetadata();

  const seo = {
    author,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="author" content={seo.author}/>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image}/>
      <meta name="og:title" content={seo.title}/>
      <meta name="og:description" content={seo.description}/>
      <meta name="og:image" content={seo.image}/>
      <meta name="og:image:alt" content={seo.title} />
      <meta name="og:site_name" content={seo.title} />
      <meta name="og:type" content={'website'} />
      {children}
    </>
  )
}

export default SEO;
