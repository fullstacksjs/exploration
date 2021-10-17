import React from 'react';
import { Helmet } from 'react-helmet';

import site from '../../config/site.json';

type MetaProps = JSX.IntrinsicElements['meta'];

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
}

const Seo: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const metaDescription = description || site.description;
  const defaultTitle = site.title;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        ...meta,
      ]}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Seo;
