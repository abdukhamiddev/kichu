import Head from 'next/head';
import Hero from '@/components/Hero';

const Home = () => (
  <div>
    <Head>
      <meta
        name="description"
        content="Kichi your favourite app for Japanese food"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
      <title>Kichi</title>
    </Head>
    <main className="">
      <Hero />

    </main>
  </div>
);
export default Home;
