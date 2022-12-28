import HomeIcon from "../assets/images/header/home.svg";
import PortfolioIcon from "../assets/images/header/portfolio.svg";
import PricingIcon from "../assets/images/header/Pricing.svg";
import MarketplaceIcon from "../assets/images/header/marketplace.svg";
import FuturesIcon from "../assets/images/header/futures.svg";
import SettingsIcon from "../assets/images/header/settings.svg";

export const menuData = [
    {
        id: 1,
        name: 'Home',
        path: '/home',
        icon: HomeIcon,
        dropdown: false,
        active: true
    },
    {
        id: 2,
        name: 'Portfolio',
        path: '/portfolio',
        icon: PortfolioIcon,
        dropdown: true,
        active: false
    },
    {
        id: 3,
        name: 'Pricing',
        path: '/pricing',
        icon: PricingIcon,
        dropdown: false,
        active: false
    },
    {
        id: 4,
        name: 'Marketplace',
        path: '/marketplace',
        icon: MarketplaceIcon,
        dropdown: false,
        active: false
    },
    {
        id: 5,
        name: 'Futures',
        path: '/futures',
        icon: FuturesIcon,
        dropdown: false,
        active: false
    },
    {
        id: 6,
        name: 'Settings',
        path: 'settings',
        icon: SettingsIcon,
        dropdown: true,
        active: false
    },
]