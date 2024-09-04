import React from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import { Nunito_Sans } from "next/font/google";

// added air bnb font to the page
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <main className={nunito.variable}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ParallaxProvider>
            {path !== "/admin" && path !== "/admin/login" && <Header />}
            <div
              className={path === "/admin" || path === "/admin/login" ? "" : ""}
            >
              <Component {...pageProps} />
              <ToastContainer />
            </div>
            <Footer />
          </ParallaxProvider>
        </PersistGate>
      </Provider>
    </main>
  );
}
