import type { NextPage } from 'next';
import Layout from '../layout';
import { Hero } from '../section';

const Home: NextPage = () => {
  return (
    <Layout title="Gani M Pakuan">
      <main className="w-full h-full">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>
      </main>
    </Layout>
  );
};

export default Home;
