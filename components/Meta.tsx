import Head from 'next/head';

import theme from '../lib/theme';

const makeTitle = (title: string, name: string) =>
  title === name ? title : `${title} – ${name}`;

interface MetaProps {
  title?: string;
  name?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = 'Exploration - Learn together',
  name = 'Exploration',
  description = "Let't Learn together",
  image = '',
  children,
}) => {
  // @ts-expect-error It's OK.
  const primaryColor: string = theme.colors.primary.__default;
  const fullTitle = makeTitle(title, name);

  return (
    <Head>
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <title key="title">{fullTitle}</title>
      <meta key="og_title" property="og:title" content={fullTitle} />
      <meta key="tw_title" name="twitter:title" content={fullTitle} />
      {description && (
        <>
          <meta key="desc" name="description" content={description} />
          <meta key="og_desc" property="og:description" content={description} />
          <meta
            key="tw_desc"
            name="twitter:description"
            content={description}
          />
        </>
      )}
      {image && (
        <>
          <meta key="og_img" property="og:image" content={image} />
          <meta
            key="tw_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="tw_img" name="twitter:image" content={image} />
        </>
      )}
      <meta key="theme_color" name="theme-color" content={primaryColor} />
      <meta
        key="tile_color"
        name="msapplication-TileColor"
        content={primaryColor}
      />
      <link sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
      <link sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
      <link sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
      <link sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
      <link sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
      <link sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
      <link sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
      <link sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-310x310.png"
      />
      <link key="manifest" rel="manifest" href="/site.webmanifest" />
      {children}
    </Head>
  );
};

export default Meta;
