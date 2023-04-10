import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Home",
	path: "/about-us",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Our Aim",
		path: "/about-us/aim",
		icon: <RiIcons.RiFocus2Fill />,
	},
	{
		title: "Our Vision",
		path: "/about-us/vision",
		icon: <RiIcons.RiFocus2Fill />,
	},
	],
},
{
	title: "Services",
	path: "/services",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Capture image",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Upload Image",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	
	],
},
{
	title: "Your Reports",
	path: "/contact",
	icon: <RiIcons.RiBarChart2Line />,
},
{
	title: "Logout",
	path: "/",
	icon: <IoIcons.IoIosLogOut />,
},

];
