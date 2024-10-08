import DogCard from './DogCard';
import styles from '../styles/dashboard.module.css';

const dogs = [
    {
        name: 'Ben Kingsley',
        breed: 'French Bulldog',
        vaccinationName: 'Kennel Cough',
        vaccinationDate: '02 July, 2024',
        expireDate: '02 July, 2026',
        image: '/dog.jpeg'
    },
    {
        name: 'Luna',
        breed: 'Golden Retriever',
        vaccinationName: 'Rabies',
        vaccinationDate: '01 August, 2024',
        expireDate: '01 August, 2026',
        image: '/dog.jpeg'
    },
    {
        name: 'Bella',
        breed: 'Poodle',
        vaccinationName: 'Distemper',
        vaccinationDate: '15 March, 2024',
        expireDate: '15 March, 2026',
        image: '/dog.jpeg'
    },
];


const DashboardContent = () => {
    return (
        <div className={styles.dashboardContent}>
            <div className={styles.approvalsList}>
                {dogs.map((dog, index) => (
                    <DogCard key={index} dog={dog} />
                ))}
            </div>
        </div>
    );
};

export default DashboardContent;

