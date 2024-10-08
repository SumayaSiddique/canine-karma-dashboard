import styles from '../styles/dashboard.module.css';
import { FaEye } from 'react-icons/fa';
import Image from 'next/image';

interface Dog {
    image: string;
    name: string;
    breed: string;
    vaccinationName: string;
    vaccinationDate: string;
    expireDate: string;
}
const DogCard = ({ dog }: { dog: Dog }) => {
    return (
        <div className={styles.approvalCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={dog.image}
                    alt={dog.name}
                    layout="fill"
                    objectFit="cover"
                    className={styles.dogImage}
                />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.dogInfo}>
                    <div className={styles.leftSide}>
                        <h3 className={styles.dogName}>{dog.name}</h3>
                        <p className={styles.dogBreed}>{dog.breed}</p>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.buttonGroup}>
                            <button className={styles.approve}>Approval</button>
                            <button className={styles.decline}>Decline</button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className={styles.dogAttributes}>
                    <div>
                        <p className={styles.vaccinationLabel}>Vaccination Name:</p>
                        <p className={styles.vaccinationValue}>{dog.vaccinationName}</p>
                    </div>
                    <div>
                        <p className={styles.vaccinationLabel}>Vaccination Date:</p>
                        <p className={styles.vaccinationValue}>{dog.vaccinationDate}</p>
                    </div>
                    <div >
                        <p className={styles.vaccinationLabel}>Expire Date:</p>
                        <p className={styles.vaccinationValue}>{dog.expireDate}</p>
                    </div>
                    <button className={styles.viewCertificate}>
                        <FaEye className={styles.eyeIcon} /> View Certificate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DogCard;




