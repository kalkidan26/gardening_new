import React from 'react';
import {  Container, MainHeading } from '../../globalStyles';
import { Image, HeroImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroImage>
				<Image/>
				</HeroImage> 
			<Container>
				<MainHeading>We Provide Landscaping Service Since 1996</MainHeading>
				<HeroText>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</HeroText>
				<ButtonWrapper>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
