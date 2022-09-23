import Document, { Head, Main, NextScript } from 'next/document'
import { Html } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage}) {
    return renderPage();
  }

  render () {    
    return (
      <Html>
        <Head>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}