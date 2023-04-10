import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const HomeSection = styled.section`
	text-align: center;
	padding: ${({ dark }) => (dark ? '5rem 1.5rem' : '0')};
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
`;

export { HomeSection, HomeImageMobile, HomeCompanies };
