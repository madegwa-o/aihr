import  { useEffect } from 'react';
import styles from './Docs.module.css';
import {useNavigate} from "react-router-dom";

export default function Docs() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add(styles.bodyDark);

        return () => {
            document.body.classList.remove(styles.bodyDark);
        };
    }, []);

    const handleGoBack = () => {

         navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Documentation</h1>
                <button className={styles.backButton} onClick={handleGoBack}>
                    ← Back to Home
                </button>
            </div>

            <div className={styles.section}>
                <h1 className={styles.h1}>Features</h1>

                <h2 className={styles.h2}>Resume Screening</h2>

                <h3 className={styles.h3}>Individual User</h3>
                <ol className={styles.ol}>
                    <li className={styles.li}>
                        <span>1</span> Upload your resume
                    </li>
                    <li className={styles.li}>
                        <span>2</span> The AI reads and analyzes your resume
                    </li>
                    <li className={styles.li}>
                        <span>3</span> The AI performs comprehensive fact-checking to:
                        <ol className={styles.nestedOl}>
                            <li className={styles.nestedLi}>
                                <span>a</span> Verify qualifications match job requirements and company expectations
                            </li>
                            <li className={styles.nestedLi}>
                                <span>b</span> Validate external links (GitHub, portfolio sites)
                            </li>
                            <li className={styles.nestedLi}>
                                <span>c</span> Rank your profile against other applicants
                            </li>
                            <li className={styles.nestedLi}>
                                <span>d</span> Send notifications when relevant jobs are posted
                            </li>
                        </ol>
                    </li>
                </ol>

                <h3 className={styles.h3}>Company</h3>
                <ol className={styles.ol}>
                    <li className={styles.li}>
                        <span>1</span> HR manager posts job vacancy
                    </li>
                    <li className={styles.li}>
                        <span>2</span> The AI analyzes job posting requirements
                    </li>
                    <li className={styles.li}>
                        <span>3</span> The AI validates job requirements to:
                        <ol className={styles.nestedOl}>
                            <li className={styles.nestedLi}>
                                <span>a</span> Flag unrealistic or contradictory requirements
                            </li>
                            <li className={styles.nestedLi}>
                                <span>b</span> Process all applications through verification
                            </li>
                            <li className={styles.nestedLi}>
                                <span>c</span> Rank qualified candidates
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    );
}
