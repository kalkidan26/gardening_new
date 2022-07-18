import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CardButton } from '../components/Carousel/CarouselStyles';
import Navbar2 from '../components/Navbar/Navbar2';
import ProjectData from '../data/ProjectData';

function AllProject() {

	const data = [
		{
			id: 0,
			title: 'Mekelle Military Staff College',
			description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',		
			image: ['../assets/project1.jpg', '../assets/project2.jpg', '../assets/project3.jpg','../assets/project1.jpg', '../assets/project2.jpg', '../assets/project3.jpg','../assets/project1.jpg', '../assets/project2.jpg', '../assets/project3.jpg'],
		},
		{
			id: 1,
			title: 'Dessie City Adminstration Park ',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
			image: '../assets/project2.jpg',
		},
		{
			id: 2,
			title: 'Sendafa Solar Panel Factory',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
			image: '../assets/project3.jpg',
		},
		{
			id: 3,
			title: 'Addis Ababa Mesqel Square',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
			image: '../assets/project4.jpg',
		},
		{
			id: 4,
			title: 'Mekelle Industrial Park',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
			image: '../assets/project4.jpg',	},
	];
	const { id } = useParams();

  return (
	  <>
	  <Navbar2 />
	<div style={{margin:'8%'}}>	
 	<h1>{data[id].title}</h1>
 	<div>{data[id].description}</div>
	{
		data[id].image.map((image, index) => {
			return (
					<img key={index} src={image} alt="project" style={{width:'33%', padding:'25px'}} />
			)
		}
		)
	}
	
	{/* <img src= {data[id].image}
	style={{width:'100%',
		height: '31rem',
		PaddingRight: '40px'}}/> */}
		<ProjectData/>
 	<Link to='/' >
	<CardButton>
	See Less
	</CardButton> </Link>
	</div>

	</>
  );
}



export default AllProject;
