import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Testimonial from '../components/Testimonial/Testimonial';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
	return (
		<>
		<Navbar />
			<Hero />
			<Features />
			<Carousel />
			<Testimonial/>
		</>
	);
};

export default Home;
