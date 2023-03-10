import Head from "next/head";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Review from "@/sections/Review";
import Pricing from "@/sections/Pricing";
import Footer from "@/sections/Footer";

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
      <Review />
      <Pricing />
      <Footer />
    </main>
  </div>
);
export default Home;
