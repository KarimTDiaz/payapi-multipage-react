import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, FONTS_FAM, FONTS_SIZE } from '../../constants/variables';

const StyledMenu = styled.ul`
	position: fixed;
	z-index: 10;
	top: 0;
	right: 0;
	height: 100vh;
	width: 80%;
	text-align: center;
	padding-top: 8.75rem;
	background-color: ${COLORS.secondary.bgColorDark};
	transform: translateX(${({ open }) => (open ? '0' : '100%')});
	transition: transform 0.5s;
	&::after {
		content: '';
		position: absolute;
		left: 5%;
		top: 15%;
		width: 90%;
		height: 1px;
		background-color: ${COLORS.secondary.textDarkSoft};
	}
`;

const MenuItem = styled.li`
	position: relative;
	margin-bottom: 2rem;
`;

const MenuLink = styled(NavLink)`
	font-family: ${FONTS_FAM.secondary};
	font-size: ${FONTS_SIZE.xxs};
	color: ${COLORS.secondary.textLight};
`;

export { StyledMenu, MenuItem, MenuLink };
