import { FC, useEffect, useState } from "react";
import logo from './assets/logo.png';

import './Header.scss';

const menuItems: Array<{
    href: string;
    title: string;
}> = [
    {
        title: "Главная",
        href: "/#main"
    },
    {
        title: "О нас",
        href: "/#about"
    },
    {
        title: "Услуги",
        href: "/#services"
    },
    {
        title: "Вакансии",
        href: "/#jobs"
    },
    {
        title: "Контакты",
        href: "/#contact"
    }
];

export const Header: FC = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    useEffect(() => {
        if (isMobileMenuActive) {
            document.body.classList.add('scroll-lock')
        } else {
            document.body.classList.remove('scroll-lock')
        }
    }, [isMobileMenuActive])

    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <img src={logo} alt="Logotype" className="header__logo" />
                    <ul className="header__menu-items">
                        {menuItems.map(menuItem => (
                            <li key={menuItem.href} className="header__menu-item">
                                <a href={menuItem.href}>{menuItem.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={`header__menu-mobile ${isMobileMenuActive ? 'active': ''}`}>
                        <div className="header__menu-icon" onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className="header__menu-mobile-wrapper">
                            <ul className="header__menu-mobile-items">
                                {menuItems.map(menuItem => (
                                    <li key={menuItem.href} className="header__menu-mobile-item">
                                        <a href={menuItem.href} onClick={() => setIsMobileMenuActive(false)}>{menuItem.title}</a>
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