import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/elements/Navbar";
import { UserContextProvider } from "components/context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Navbar />
      <Component {...pageProps} />;
    </UserContextProvider>
  );
}

export default MyApp;
