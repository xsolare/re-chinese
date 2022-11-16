const nextSeoConfig = {
  title: 'ReChinese',
  titleTemplate: '%s • ReChinese',
  description: '🫀 ReChinese',
  openGraph: {
    url: process.env.NEXT_SITE_URL,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_SITE_URL ?? ''}/assets/image/meta.png`,
        width: 1200,
        height: 630,
        alt: 'Jusang'
      }
    ]
  }
};

export default nextSeoConfig;
