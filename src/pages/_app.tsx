import { NextPage } from "next";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";

import store from "src/store";
// import AppUtils from "./AppUtils";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AppUtils from "@components/AppUtils";
import "src/styles/globals.css";

export type NextPageWithLayout<Props> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>;
};

function App({ Component, pageProps, router, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (router.locale === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [router.locale]);

  return (
    <>
      <Provider store={store}>
        {getLayout(
          <>
            <AppUtils />
            <Component {...pageProps} />
          </>
        )}
      </Provider>
    </>
  );
}

export default appWithTranslation(App);
