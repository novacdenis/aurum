import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function AurumApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(AurumApp);
