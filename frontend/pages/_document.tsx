import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps (ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render () {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
            body, html {
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
              font-family: 'Open Sans', sans-serif;
            }

            h1, h2, p {
              font-family: 'Open Sans', sans-serif;
            }
            .wrapper {
              display: flex;
              flex-direction: column;
            }
          `}</style>
      </Html>
    );
  }
}

export default CustomDocument;
