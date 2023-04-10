import { StyledMenuIcon } from "./styles"

const MenuIcon = ({ open, setOpen }) => {
    return <StyledMenuIcon onClick={() => setOpen(!open)} src={!open ? "/images/shared/mobile/menu.svg" : "/images/shared/mobile/close.svg"} alt="Icono de menu" />
}

export default MenuIcon