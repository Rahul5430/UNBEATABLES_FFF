import React from 'react';
import Anomalies from '../components/Anomalies';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import space from '../assets/space_bg.jpg';
import { Stack } from '@chakra-ui/react';

const News = () => {
	return (
		<Stack bgImage={space}>
			<Navbar />
			{/* <Banner /> */}
			<Anomalies />
			<Footer />
		</Stack>
	);
};

export default News;
