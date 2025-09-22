import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const SeoHead: React.FC = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Head>
        <title>SEO Content Writer & Outreach Ghostwriter | Ksenia Melnychenko</title>
        <meta
          name="description"
          content="Professional SEO content writer specializing in outreach articles, guest posts, and link-building content. Ghostwriting services for brands and startups seeking visibility and authority."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ksenia Melnychenko — SEO Content Writer" />
        <meta
          property="og:description"
          content="SEO-focused content, storytelling, and ghostwriting portfolio. Read samples and get in touch."
        />
        <meta property="og:image" content="/images/Ksu.png" />
        <meta property="og:image:alt" content="Ksenia Melnychenko portfolio preview" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ksenia Melnychenko — SEO Content Writer" />
        <meta name="twitter:description" content="SEO content writing, storytelling, and ghostwriting portfolio." />
        <meta name="twitter:image" content="/images/Ksu.png" />
        <meta name="google-site-verification" content="0gTITs89vyCvSWxm7AAEaUkJkvHIf5s8VukivKO9bWk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {GA_ID && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default SeoHead;

