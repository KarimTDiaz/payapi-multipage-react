import { StyledLogo } from './styles';
import { NavLink } from 'react-router-dom';
const Logo = () => {
	return (
		<NavLink to='/'>
			<StyledLogo src='/images/shared/desktop/logo.svg' alt='Logo' />
		</NavLink>
	);
};

export default Logo;
