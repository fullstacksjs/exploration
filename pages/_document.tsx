import type { DocumentContext } from 'next/document';
import BaseDocument, { Head, Html, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export class Document extends BaseDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await BaseDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
