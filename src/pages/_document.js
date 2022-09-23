import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  function getInitialProps ({ renderPage}) {
    return renderPage();
  }

  return (
    <Html>
      <Head>
        <meta name="theme-color" content="rgb(204,77,217)"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
