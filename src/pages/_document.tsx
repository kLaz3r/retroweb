import { Head, Html, Main, NextScript } from "next/document";

// in case i need to disable this janky mess
const bypassErrorOverlayScript = true;

const noOverlayWorkaroundScript = `
window.addEventListener('error', event => {
  if (event.message == "Uncaught Error: FS error") {
    event.stopImmediatePropagation()
    console.log(event.message);
  }
})
`;

export default function Document() {
  return (
    <Html>
      <Head>
        {bypassErrorOverlayScript && (
          <script
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            // this is needed because of a stupid FS error in EmulatorJS that doesn't break anything but appears as a runtime error in next.js
            dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }}
          />
        )}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#aaa" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
