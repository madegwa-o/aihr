import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = React.useState<number | null >(null);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Docs', path: '/docs' }
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer} onClick={() => handleNavigation('/')}>
                <div className={styles.logoWrapper}>
                    <img src={logo} className={styles.logoImage} alt="aihr" />
                </div>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        const isHovered = hoveredItem === index;

                        const liClassNames = [
                            styles.navItem,
                            isActive ? styles.active : '',
                            isHovered ? styles.hovered : ''
                        ].join(' ');

                        return (
                            <li
                                key={item.name}
                                className={liClassNames}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
