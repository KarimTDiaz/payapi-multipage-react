import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS_FAM, FONTS_SIZE, COLORS } from '../../constants/variables';
const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;
	padding: 2.5rem 0;
	text-align: center;
	background-color: ${COLORS.secondary.bgColorDark};
`;

const FooterMenu = styled.ul``;
const FooterMenuItem = styled.li`
	margin-bottom: 1.875rem;
`;
const FooterMenuLink = styled(NavLink)`
	font-family: ${FONTS_FAM.secondary};
	font-size: ${FONTS_SIZE.xxxs};
	color: ${COLORS.secondary.textLight};
`;

export { StyledFooter, FooterMenu, FooterMenuItem, FooterMenuLink };
