import { Title, Meta, Link } from '@solidjs/meta';

const SITE_NAME = 'Octopilot';
const BASE_URL = 'https://octopilot.app';
const DEFAULT_IMAGE = `${BASE_URL}/assets/og-default.png`;

interface PageMetaProps {
  /** Page-specific title — appended with " | Octopilot" */
  title: string;
  /** Meta description (150–160 chars ideal) */
  description: string;
  /** Canonical path, e.g. "/docs/github-actions" */
  path: string;
  /** Optional OG image override */
  image?: string;
  /** Set to "article" for blog posts */
  type?: 'website' | 'article';
}

const PageMeta = (props: PageMetaProps) => {
  const fullTitle = () => `${props.title} | ${SITE_NAME}`;
  const canonical = () => `${BASE_URL}${props.path}`;
  const image = () => props.image ?? DEFAULT_IMAGE;
  const type = () => props.type ?? 'website';

  return (
    <>
      <Title>{fullTitle()}</Title>

      {/* Standard meta */}
      <Meta name="description" content={props.description} />
      <Link rel="canonical" href={canonical()} />

      {/* Open Graph */}
      <Meta property="og:title" content={fullTitle()} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:url" content={canonical()} />
      <Meta property="og:type" content={type()} />
      <Meta property="og:site_name" content={SITE_NAME} />
      <Meta property="og:image" content={image()} />

      {/* Twitter / X card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={fullTitle()} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={image()} />
    </>
  );
};

export default PageMeta;
