import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";

import "public/js-dos/js-dos.css";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
