import React from 'react';

// import {GiGardeningShears} from 'react-icons/gi'
import { RiLandscapeFill } from 'react-icons/ri';
import {  BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';

const iconStyle = (Icon) => <Icon size="3rem" color="#67923D" />;

export const testimonialsData = [
	{
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		icon: iconStyle(RiLandscapeFill),
		imgClass: 'two',
	},
	{
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
];
