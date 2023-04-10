import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, FONTS_FAM } from '../../constants/variables';

const PrimaryButton = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 3rem;
	border-radius: 1.5rem;
	margin-left: auto;
	margin-right: auto;
	font-family: ${FONTS_FAM.secondary};
	color: ${COLORS.secondary.textLight};
	background-color: ${COLORS.primary.theme};
`;

const SecondaryButton = styled(NavLink)`
	width: 100%;
	padding: 0.9rem 2rem;
	font-family: ${FONTS_FAM.secondary};
	color: ${COLORS.secondary.textLight};
	background-color: transparent;
	border: 1px solid ${COLORS.secondary.textLight};
	border-radius: 1.5rem;
`;

export { PrimaryButton, SecondaryButton };
