import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact';
import ProfessionalExperience from '../components/ProfessionalExperience';

const Home = () => {
	return (
		<>
			<Head>
				<title>Aaron - Frontend Developer</title>
				<meta name="description" content="Welcome to my resume website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main />
			<About />
			<Skills />
			<ProfessionalExperience />
			<Contact />
		</>
	);
};

export default Home;
