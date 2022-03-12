import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/elements/Navbar";
import { UserContextProvider } from "components/context/UserContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
