import Logo from '../logo/Logo';
import { MENU_ITEMS } from '../../constants/menu';
import {
	FooterMenu,
	FooterMenuItem,
	FooterMenuLink,
	StyledFooter
} from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<Logo />
			<FooterMenu>
				{MENU_ITEMS.map(item => (
					<FooterMenuItem key={item.id}>
						<FooterMenuLink to={item.route}>{item.item}</FooterMenuLink>
					</FooterMenuItem>
				))}
			</FooterMenu>
		</StyledFooter>
	);
};

export default Footer;
