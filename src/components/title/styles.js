import styled from 'styled-components';
import { COLORS, FONTS_SIZE } from '../../constants/variables';

const StyledTitle = styled.h2`
	font-size: ${FONTS_SIZE.m};
	color: ${({ dark }) =>
		dark ? `${COLORS.secondary.textDark}` : `${COLORS.secondary.textLight}`};
`;

export { StyledTitle };
