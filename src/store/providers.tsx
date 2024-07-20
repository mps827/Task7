"use client";
import { Provider } from "react-redux";
import { store } from "./index";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

// import type { AppProps } from "next/app";
// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }
