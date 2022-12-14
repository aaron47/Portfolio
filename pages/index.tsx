import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Head>
        <title>Aaron - Frontend Developer</title>
        <meta name="description" content="Come take a look :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
