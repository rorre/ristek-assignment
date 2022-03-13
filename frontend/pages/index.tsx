import { Loader } from "@elements";
import About from "components/modules/MainPage/about";
import Header from "components/modules/MainPage/header";
import Links from "components/modules/MainPage/links";
import { Works, Projects } from "components/modules/MainPage/works";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ren</title>
      </Head>
      <Loader>
        <Header />
        <About />
        <Works />
        <Projects />
        <Links />
      </Loader>
    </>
  );
};

export default Home;
