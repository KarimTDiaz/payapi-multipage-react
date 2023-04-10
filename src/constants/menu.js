import { v4 } from "uuid"

export const MENU_ITEMS = [
    {
        item: 'Pricing',
        route: '/pricing',
        id: v4()
    },
    {
        item: 'About',
        route: '/about',
        id: v4()
    },
    {
        item: 'Contact',
        route: '/contact',
        id: v4()
    }
]