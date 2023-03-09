import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { store } from "../../redux/store";

function MyApp({ Component, pageProps }: AppProps | any) {
  return (
    <>
      <Provider store={store}>
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
