const nextSeoConfig = {
  title: 'next',
  titleTemplate: '%s ㅣ next.js',
  description: 'next js',
  openGraph: {
    url: process.env.webUrl,
    type: 'website',
    images: [
      {
        url: `${process.env.webUrl ?? ''}/meta/meta-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'welcome!'
      }
    ]
  }
};

export default nextSeoConfig;
