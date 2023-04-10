import { MENU_ITEMS } from '../../constants/menu';
import { StyledMenu, MenuItem, MenuLink } from './styles';

const Menu = ({ open }) => {
    return (
        <nav>
            <StyledMenu open={open}>
                {MENU_ITEMS.map(item => (
                    <MenuItem>
                        <MenuLink to={item.route}>{item.item}</MenuLink>
                    </MenuItem>
                ))}
            </StyledMenu>
        </nav>
    );
};

export default Menu;
