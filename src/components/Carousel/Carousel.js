import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';
import { Link } from 'react-router-dom';
const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse id="project">
			{/* <Row justify="space-between" margin="1rem" wrap="wrap"> */}
				<Heading width="auto" inverse>
					Our Projects
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '2rem',color: '#1d609c' , padding:'50rem'}}>
						<FaArrowCircleLeft style={{color:'#67923D'}} onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight style={{color:'#67923D'}} onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			{/* </Row> */}

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<Link to={`/allproject/${el.id}`} >
						<CardButton >See More</CardButton> 
						</Link>					
						</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
