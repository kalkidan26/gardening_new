export const data = [
	{
		id:0,
		title: 'Mekelle Military Staff College',
		description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',		
		image: '../assets/project1.jpg',
	},
	{
		id:1,
		title: 'Dessie City Adminstration Park ',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: '../assets/project2.jpg',
	},
	{
		id:2,
		title: 'Sendafa Solar Panel Factory',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: '../assets/project3.jpg',
	},
	{
		id:3,
		title: 'Addis Ababa Mesqel Square',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: '../assets/project4.jpg',
    	},
	{
		id:4,
		title: 'Mekelle Industrial Park',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: '../assets/project4.jpg',
    },
];


export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
