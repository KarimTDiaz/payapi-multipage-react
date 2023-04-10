import { MENU_ITEMS } from '../../constants/menu';
import { StyledMenu, MenuItem, MenuLink } from './styles';

const Menu = ({ open, footer }) => {
	return (
		<nav>
			<StyledMenu open={open}>
				{MENU_ITEMS.map(item => (
					<MenuItem key={item.id}>
						<MenuLink to={item.route}>{item.item}</MenuLink>
					</MenuItem>
				))}
			</StyledMenu>
		</nav>
	);
};

export default Menu;
