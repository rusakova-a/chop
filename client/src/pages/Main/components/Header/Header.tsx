import { FC, ReactElement } from "react";

interface HeaderProps {
    logo: string;
    menuItems: Array<{
        href: string;
        title: string;
    }>;
}

export const Header: FC<HeaderProps> = ({ logo, menuItems }) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <img src={logo} alt="Logotype" className="header__logo" />
                    <ul className="header__menu-items">
                        {menuItems.map(menuItem => (
                            <li className="header__menu-item">
                                <a href={menuItem.href}>{menuItem.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="header__menu-mobile">
                        <div className="header__menu-icon">
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className="header__menu-mobile-wrapper">
                            <div className="header__menu-icon-mobile">
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            <ul className="header__menu-mobile-items">
                                {menuItems.map(menuItem => (
                                    <li className="header__menu-mobile-item">
                                        <a href={menuItem.href}>{menuItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}