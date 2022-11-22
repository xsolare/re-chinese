import type { DocumentContext, DocumentInitialProps, DocumentProps } from 'next/document';
import { extractCritical } from '@emotion/server';
import { Global } from '@emotion/react';
import { GlobalStyles } from '#/styles/common';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage();
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(page.html);

    return {
      ...initialProps,
      ...page,
      ...styles
    };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <meta charSet="utf-8" />
          <meta name="theme-color" content="#050709" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          <meta name="application-name" content="ReChinese" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="ReChinese" />
          <meta name="description" content="ReChinese app" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#050709" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href="https://rechinese.ru/icons/logo-128x128.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="https://rechinese.ru/icons/logo-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="https://rechinese.ru/icons/logo-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="https://rechinese.ru/icons/logo-521x512.png"
          />

          <link
            rel="mask-icon"
            href="https://rechinese.ru/maskable/maskable_icon_x128.png"
            color="#d55b5b"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="https://rechinese.ru/image/meta.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://rechinese.ru" />
          <meta name="twitter:title" content="ReChinese" />
          <meta name="twitter:image" content="https://rechinese.ru/image/meta.png" />
          <meta name="twitter:creator" content="@xSolare" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="ReChinese" />
          <meta property="og:description" content="Здесь ненавидят кислород." />
          <meta property="og:site_name" content="ReChinese" />
        </Head>
        <Global styles={GlobalStyles} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
