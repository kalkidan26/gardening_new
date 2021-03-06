import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
	width: 100%;
	height: 200px;
	border-radius: 10px 10px 10px 10px;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 310px;

	@media screen and (min-width: 440px) {
		box-shadow: rgba(0, 0, 0, 0.35) 5px 10px 15px;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 10rem;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: #FFFFFF;
	font-size: 1.1rem;
	padding: 2.5px 10px;
	color: #67923D;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	text-align: right;
	border: none;j
	border-radius: 0 0 10px 10px;

`;
