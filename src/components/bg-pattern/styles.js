import styled from 'styled-components';

const StyledBgPattern = styled.div`
	position: absolute;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url('/images/shared/desktop/bg-pattern-circle.svg');
	background-position: center -545px;
	background-repeat: no-repeat;
	pointer-events: none;
`;

export { StyledBgPattern };
