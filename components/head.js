import Head from 'next/head';

export default function head() {
  
  return (
    <Head>
      <title>Next SPA Template</title>
      <meta charSet="UTF-8" />
      <meta name="author" content="author name" />
      <meta name="description" content="Write you description here" />
      <meta name="keywords" content="mention,keywords,here" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="black" />
      <meta name="robots" content="index, follow" />
      <meta property="profile:first_name" content="name" />
      <meta property="profile:last_name" content="last_name" />
      <meta property="profile:gender" content="Male/Female/Other" />
      
      <meta property="og:image" content="/img-link" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="image alt text" />
      <meta property="og:type" content="website type" />
      <meta property="og:title" content="website title" />
      <meta property="og:description" content="Write you description here" />
      <meta property="og:url" content="https://man-link.com/" />
      
      
      <link rel="canonical" href="https://canonical-link.com/" />
    </Head>
  );
}