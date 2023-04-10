import { useState } from 'react';
import Logo from '../logo/Logo';
import MenuIcon from '../menu-icon/MenuIcon';
import Menu from '../menu/Menu';
import StyledHeader from './styles';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <StyledHeader>
            <Logo />
            <Menu open={open} />
            <MenuIcon open={open} setOpen={setOpen} />
        </StyledHeader>
    );
};

export default Header;
