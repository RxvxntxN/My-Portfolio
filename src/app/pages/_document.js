import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Font link from Google*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <style>{`
            body {
              font-family: 'Pacifico', cursive;
            }
          `}</style>
        </Head>
        <body>

        </body>
      </Html>
    );
  }
}

export default MyDocument;