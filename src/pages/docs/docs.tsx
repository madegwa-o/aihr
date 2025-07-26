
import styles from './Docs.module.css';
import { useNavigate } from "react-router-dom";

export default function Docs() {
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Documentation</h1>
                        <p className={styles.subtitle}>Everything you need to know about AIHR</p>
                        <button className={styles.backButton} onClick={handleGoBack}>
                            <span className={styles.backIcon}>←</span>
                            <span>Back to Home</span>
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.section}>
                        <h1 className={styles.h1}>
                            <span className={styles.sectionIcon}>⚡</span>
                            Features
                        </h1>

                        <div className={styles.featureCard}>
                            <h2 className={styles.h2}>
                                <span className={styles.featureIcon}>📄</span>
                                Resume Screening
                            </h2>

                            <div className={styles.userTypeSection}>
                                <h3 className={styles.h3}>
                                    <span className={styles.userIcon}>👤</span>
                                    Individual User
                                </h3>
                                <ol className={styles.ol}>
                                    <li className={styles.li}>
                                        <span>1</span>
                                        <div className={styles.stepContent}>
                                            <strong>Upload your resume</strong>
                                            <p>Simply drag and drop or select your resume file</p>
                                        </div>
                                    </li>
                                    <li className={styles.li}>
                                        <span>2</span>
                                        <div className={styles.stepContent}>
                                            <strong>AI Analysis</strong>
                                            <p>The AI reads and analyzes your resume comprehensively</p>
                                        </div>
                                    </li>
                                    <li className={styles.li}>
                                        <span>3</span>
                                        <div className={styles.stepContent}>
                                            <strong>Comprehensive Fact-checking</strong>
                                            <p>The AI performs thorough verification to:</p>
                                        </div>
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
                            </div>

                            <div className={styles.userTypeSection}>
                                <h3 className={styles.h3}>
                                    <span className={styles.userIcon}>🏢</span>
                                    Company
                                </h3>
                                <ol className={styles.ol}>
                                    <li className={styles.li}>
                                        <span>1</span>
                                        <div className={styles.stepContent}>
                                            <strong>Job Posting</strong>
                                            <p>HR manager posts job vacancy with requirements</p>
                                        </div>
                                    </li>
                                    <li className={styles.li}>
                                        <span>2</span>
                                        <div className={styles.stepContent}>
                                            <strong>Requirement Analysis</strong>
                                            <p>The AI analyzes job posting requirements</p>
                                        </div>
                                    </li>
                                    <li className={styles.li}>
                                        <span>3</span>
                                        <div className={styles.stepContent}>
                                            <strong>Job Validation</strong>
                                            <p>The AI validates job requirements to:</p>
                                        </div>
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


                    </div>
                </div>
            </div>
        </div>
    );
}