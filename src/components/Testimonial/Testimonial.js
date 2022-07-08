import React from 'react';
import { Container, Heading, Section } from '../../globalStyles';
import {
	TestimonialText,
	TestimonialWrapper,
	TestimonialColumn,
	TestimonialImageWrapper,
	TestimonialTextWrapper,
} from './TestimonialsStyles';
import { testimonialsData } from '../../data/TestimonialsData';

const Testimonial= () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section padding="0px" smPadding="50px 10px" position="relative" inverse id="customer">
			<Container>
				<TestimonialTextWrapper>
					<Heading>
						Happy Customers
					</Heading>
				</TestimonialTextWrapper>
				<TestimonialWrapper>
					{testimonialsData.map((el, index) => (
						<TestimonialColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<TestimonialText>{el.description}</TestimonialText>
                            <TestimonialImageWrapper className={el.imgClass}>
								{el.icon}
							</TestimonialImageWrapper>
						</TestimonialColumn>
					))}
				</TestimonialWrapper>
			</Container>
		</Section>
	);
};

export default Testimonial;
