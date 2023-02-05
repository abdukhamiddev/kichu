import Head from "next/head";
import Hero from "@/sections/Hero";
import About from "@/sections/About";

const Home = () => (
  <div>
    <Head>
      <meta
        name="description"
        content="Kichi your favourite app for Japanese food"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/svg/favicon.svg" />
      <title>Kichi</title>
    </Head>
    <main className="">
      <Hero />
      <About />
    </main>
  </div>
);
export default Home;
