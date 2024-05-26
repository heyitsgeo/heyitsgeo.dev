import { graphql, useStaticQuery } from 'gatsby';

type UseSiteMetadata = {
  title?: string;
  description?: string;
  image?: string,
  siteUrl?: string;
  author?: string;
}

const useSiteMetadata = (): UseSiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          author
        }
      }
    }
  `);

  return data.site.siteMetadata as UseSiteMetadata;
}

export default useSiteMetadata;
