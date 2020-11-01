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
        <div id="modal" />
      </Html>
    );
  }
}

export default CustomDocument;
