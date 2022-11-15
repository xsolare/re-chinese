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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Rubik+Bubbles&family=Rubik:wght@500;600;700&display=swap"
            rel="stylesheet"
          />

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
          {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}

          {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" /> */}
          {/* <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" /> */}
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" /> */}
          {/* <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" /> */}

          {/* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" /> */}
          {/* <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" /> */}
          <link rel="icon" type="image/png" sizes="128x128" href="/icons/logo-128x128.png" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://rechinese.ru" />
          <meta name="twitter:title" content="ReChinese" />
          <meta name="twitter:description" content="ReChinese app" />
          {/* <meta
            name="twitter:image"
            content="https://yourdomain.com/icons/android-chrome-192x192.png"
          /> */}
          <meta name="twitter:creator" content="@xSolare" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="ReChinese" />
          <meta property="og:description" content="ReChinese app" />
          <meta property="og:site_name" content="ReChinese" />
          <meta property="og:url" content="https://rechinese.ru" />
          {/* <meta property="og:image" content="https://localhost:3000/icons/apple-touch-icon.png" /> */}
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
