import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import { FaRegBell, FaCog, FaThumbtack, FaArrowLeft, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <FaArrowLeft className={styles.icon} />
                <span className={styles.documentTitle}>Document Approvals</span>
            </div>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search Dogs"
                    className={styles.searchBar}
                />
                <FaSearch className={styles.searchIcon} />
            </div>
            <div className={styles.navbarRight}>
                <FaThumbtack className={styles.icon} />
                <FaCog className={styles.icon} />
                <FaRegBell className={styles.icon} />
                <div className={styles.navbarProfile}>
                    <Image
                        src="/Man.png"
                        alt="User"
                        width={50}
                        height={50}
                        className={styles.userAvatar}
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;



