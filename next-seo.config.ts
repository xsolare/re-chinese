const nextSeoConfig = {
  title: 'ReChinese',
  titleTemplate: '%s ㅣ ReChinese',
  description: 'ReChinese',
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
