import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';

export default function Homepage() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        document.body.classList.add(styles.bodyDark);
        return () => {
            document.body.classList.remove(styles.bodyDark);
        };
    }, []);

    return (
        <main className={styles.main}>
            <div className={`${styles.decoration} ${styles.leftDecoration}`}></div>
            <div className={`${styles.decoration} ${styles.rightDecoration}`}></div>

            <div className={styles.container}>
                <h1 className={styles.title}>AIhr</h1>
                <h2 className={styles.subtitle}>Artificially Intelligent Hiring & Recruiting</h2>
                <p className={styles.description}>Are you hiring or recruiting? You need AI</p>

                <button
                    className={`${styles.ctaButton} ${isHovered ? styles.ctaButtonHover : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => navigate('/docs')}
                >
                    Read the Docs
                </button>
            </div>
        </main>
    );
}
