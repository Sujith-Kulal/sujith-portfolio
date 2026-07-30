import type { AppProps } from "next/app";
import Head from "next/head";
import "../app/globals.css";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/sujith-portfolio" : "");

export default function MyApp({ Component, pageProps }: AppProps) {
  const profileImageUrl = `${basePath}/profile.png`;

  return (
    <>
      <Head>
        <title>Sujith Kulal | Full Stack Developer & AI/NLP Specialist</title>
        <meta
          name="description"
          content="Portfolio of Sujith Kulal — MCA Student (2024-2026), Developer Intern at MIT Manipal, specializing in AI, NLP, React, Next.js, Java Spring Boot & Python."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon & Profile Pic Icon Links */}
        <link rel="icon" type="image/png" href={profileImageUrl} />
        <link rel="shortcut icon" type="image/png" href={profileImageUrl} />
        <link rel="apple-touch-icon" href={profileImageUrl} />

        {/* Open Graph / Social Sharing Image Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sujith Kulal | Full Stack Developer & AI/NLP Specialist" />
        <meta property="og:description" content="Portfolio of Sujith Kulal — MCA Student (2024-2026), Developer Intern at MIT Manipal." />
        <meta property="og:image" content={profileImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sujith Kulal | Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer & AI / NLP Specialist" />
        <meta name="twitter:image" content={profileImageUrl} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
