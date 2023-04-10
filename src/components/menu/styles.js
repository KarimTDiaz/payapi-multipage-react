import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, FONTS_FAM } from '../../constants/variables';

const StyledMenu = styled.ul`
	position: fixed;
	top: 0;
    right: 0;
	height: 100vh;
	width: 80%;
	background-color: ${COLORS.secondary.bgColorDark};
	transform: translateX(${({ open }) => (open ? '0' : '100%')});
	transition: transform 0.5s;
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
font-family: ${FONTS_FAM.secondary};
color:${COLORS.secondary.textDarkSoft}
`;

export { StyledMenu, MenuItem, MenuLink };
