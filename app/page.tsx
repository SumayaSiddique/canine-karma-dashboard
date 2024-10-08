import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}



