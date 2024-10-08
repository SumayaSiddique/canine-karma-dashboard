'use client'
import { useState } from 'react';
import styles from '../styles/sidebar.module.css';
import Image from 'next/image';
import { FaChartPie, FaDog, FaBook, FaComments, FaServicestack, FaCalendar, FaFileAlt, FaUserFriends, FaUsersCog } from 'react-icons/fa';

const Sidebar = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const handleClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <aside className={styles.sidebar}>
            <Image
                src="/Logo2.png"
                alt="Canine Karma"
                width={170}
                height={40}
                priority
            />
            <nav className={styles.sidebarNav}>
                <ul>
                    <li
                        className={activePage === 'dashboard' ? styles.active : styles.inactive}
                        onClick={() => handleClick('dashboard')}
                    >
                        <FaChartPie />
                        <a href="#">Dashboard</a>
                    </li>
                    <li
                        className={activePage === 'dogs' ? styles.active : styles.inactive}
                        onClick={() => handleClick('dogs')}
                    >
                        <FaDog />
                        <a href="#">Dogs</a>
                    </li>
                    <li
                        className={activePage === 'book' ? styles.active : styles.inactive}
                        onClick={() => handleClick('book')}
                    >
                        <FaBook />
                        <a href="#">Book</a>
                    </li>
                    <li
                        className={activePage === 'chat' ? styles.active : styles.inactive}
                        onClick={() => handleClick('chat')}
                    >
                        <FaComments />
                        <a href="#">Chat</a>
                    </li>
                    <li
                        className={activePage === 'services' ? styles.active : styles.inactive}
                        onClick={() => handleClick('services')}
                    >
                        <FaServicestack />
                        <a href="#">Services</a>
                    </li>
                    <li
                        className={activePage === 'calendar' ? styles.active : styles.inactive}
                        onClick={() => handleClick('calendar')}
                    >
                        <FaCalendar />
                        <a href="#">Calendar</a>
                    </li>
                    <li
                        className={activePage === 'reports' ? styles.active : styles.inactive}
                        onClick={() => handleClick('reports')}
                    >
                        <FaFileAlt />
                        <a href="#">Reports</a>
                    </li>
                    <li
                        className={activePage === 'client-report' ? styles.active : styles.inactive}
                        onClick={() => handleClick('client-report')}
                    >
                        <FaUserFriends />
                        <a href="#">Client Report</a>
                    </li>
                    <li
                        className={activePage === 'rescue-dogs' ? styles.active : styles.inactive}
                        onClick={() => handleClick('rescue-dogs')}
                    >
                        <FaDog />
                        <a href="#">Rescue Dogs</a>
                    </li>
                    <li
                        className={activePage === 'community' ? styles.active : styles.inactive}
                        onClick={() => handleClick('community')}
                    >
                        <FaUsersCog />
                        <a href="#">Community</a>
                    </li>
                    <li
                        className={activePage === 'settings' ? styles.active : styles.inactive}
                        onClick={() => handleClick('settings')}
                    >
                        <FaUsersCog />
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;



