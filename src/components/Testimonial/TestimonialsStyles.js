import styled from 'styled-components';
import { motion } from 'framer-motion';

// export const FeatureTitle = styled.h2`
// 	text-align: center;
// 	font-size: clamp(1.3rem, 13vw, 3.1rem);
// 	line-height: 1.06;
// 	letter-spacing: 0.4rem;
// 	margin: auto;
// `;

export const TestimonialTextWrapper = styled.div`
	position: relative;
`;

export const TestimonialWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 2rem;
	grid-gap: 2rem;
	padding: 30px;


	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const TestimonialColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: left;
	background: #fff;
	padding: 0px;
	border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TestimonialImageWrapper = styled.div`
	margin-bottom: 1rem;
	padding: 30px;
`;
export const TestimonialName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;

	
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const TestimonialText = styled.p`
	margin: 1rem 1rem auto;
	text-align: left;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
