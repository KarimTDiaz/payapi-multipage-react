import styled from 'styled-components';
import { COLORS, FONTS_FAM } from '../../constants/variables';

const HomeSection = styled.section`
	text-align: center;
	padding: ${({ head }) => (head ? '0 1.5rem' : '0 1.5rem 5rem 1.5rem')};
	background-color: ${({ dark }) =>
		dark
			? `${COLORS.secondary.bgColorDark}`
			: `${COLORS.secondary.bgColorLight}`};
`;

const HomeImageMobile = styled.img`
	display: flex;
	justify-content: center;
	justify-items: center;
	margin-left: auto;
	margin-right: auto;
`;

const HomeCompanies = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 45px;
	padding-top: 5rem;
`;

const HomeImageCoding = styled.img`
	padding-top: 2rem;
	margin-bottom: -1rem;
`;
const HomeImageTwoMobiles = styled.img`
	margin-top: -2rem;
`;
const HomeServicesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3.125rem;
`;
const ServicesItem = styled.li``;
const ServicesIcon = styled.img`
	margin-left: auto;
	margin-right: auto;
`;
const ServicesTitle = styled.h3`
	font-family: ${FONTS_FAM.secondary};
	color: ${COLORS.secondary.textDark};
`;

export {
	HomeSection,
	HomeImageMobile,
	HomeCompanies,
	HomeImageCoding,
	HomeImageTwoMobiles,
	HomeServicesList,
	ServicesItem,
	ServicesIcon,
	ServicesTitle
};
