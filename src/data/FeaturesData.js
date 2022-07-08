import React from 'react';

// import {GiGardeningShears} from 'react-icons/gi'
import { RiLandscapeFill } from 'react-icons/ri';
import {  BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#67923D" />;

export const featuresData = [
	{
		name: 'Gardening',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		icon: iconStyle(RiLandscapeFill),
	},
	{
		name: 'General Contractor',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		icon: iconStyle(GrHostMaintenance),
	},
	{
		name: 'Landscape Management and Maintenance',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.',
		icon: iconStyle(BiDollar),
	},
];
