export const data = [
	{
		id:0,
		title: 'Mekelle Military Staff College',
		description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',		
		image: '../assets/clients.jpg',
	},
	{
		id:1,
		title: 'Dessie City Adminstration Park ',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: '../assets/security.jpg',
	},
	{
		id:2,
		title: 'Sendafa Solar Panel Factory',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: '../assets/teamwork.jpg',
	},
	{
		id:3,
		title: 'Addis Ababa Mesqel Square',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		id:4,
		title: 'Mekelle Industrial Park',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
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
