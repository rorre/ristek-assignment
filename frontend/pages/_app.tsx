import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/elements/Navbar";
import { UserContextProvider } from "components/context/UserContext";
import { Toaster } from "react-hot-toast";
import { Loader } from "@elements";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Loader>
        <Navbar />
        <Toaster />
        <Component {...pageProps} />
      </Loader>
    </UserContextProvider>
  );
}

export default MyApp;
