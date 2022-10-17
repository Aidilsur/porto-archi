import type { NextPage } from 'next';
import Head from 'next/head';
import { About, Hero } from '../components';
import Layout from '../layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Gani M Pakuan">
        <>
          <section id="hero">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>
        </>
      </Layout>
    </>
  );
};

export default Home;
