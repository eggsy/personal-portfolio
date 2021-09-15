import Head from "next/head";

/* Import Tailwind CSS */
import "tailwindcss/tailwind.css";

/* Import types */
import type { AppProps } from "next/app";

const PersonalPortfolio = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default PersonalPortfolio;
