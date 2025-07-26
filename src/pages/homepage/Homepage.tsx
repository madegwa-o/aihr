import { useEffect, useState } from 'react';
import styles from './Homepage.module.css';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const clients = [
        'Safaricom', 'Equity Bank', 'KCB Group', 'Nation Media Group',
        'Jumia', 'Twiga Foods', 'Kenya Airways', 'Bamboo',
        'NCBA Bank', 'KenGen', 'mTek Services', 'Cellulant'
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleReadMore = () => {
        navigate('/docs');
    };

    return (
        <div className={styles.wrapper}>
            {/* Animated Background Pattern */}
            <div className={styles.bgPattern} />

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`${styles.shape} ${styles.shapeOne}`} />
                <div className={`${styles.shape} ${styles.shapeTwo}`} />
                <div className={`${styles.shape} ${styles.shapeThree}`} />
            </div>

            {/* Interactive Cursor Follow Effect */}
            <div
                className={styles.cursorEffect}
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12
                }}
            />

            {/* Floating Widgets */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Right Widget */}
                <div className={`${styles.widget} ${styles.widgetReverse}`} style={{ top: '8rem', right: '2rem', padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                            width: '2rem',
                            height: '2rem',
                            background: 'linear-gradient(to right, #4ade80, #3b82f6)',
                            borderRadius: '9999px'
                        }} />
                        <div>
                            <div style={{ color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>99.7%</div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem' }}>Accuracy</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Left Widget */}
                <div className={styles.widget} style={{ bottom: '10rem', left: '3rem', padding: '0.75rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>24/7</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem' }}>Support</div>
                </div>
            </div>

            {/* Main Content */}
            <main className={styles.main}>
                <div className={styles.contentContainer}>
                    <div className={styles.heroSection}>
                        <div className={styles.heroContainer}>
                            <h1 className={styles.heroTitle}>AIHR</h1>
                            <div className={styles.heroDescription}>
                                <h2 className={styles.heroSubtitle}>Artificially Intelligent Hiring & Recruiting</h2>
                                <p className={styles.heroDesc}>Are you hiring or recruiting? You need AI.</p>

                                <button
                                    className={styles.readMoreBtn}
                                    onClick={handleReadMore}
                                >
                                    <span className={styles.buttonText}>Read More</span>
                                    <div className={styles.readMoreHoverBg} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Trusted Clients Section */}
                    <div className={styles.clientList}>
                        <h2 className={styles.clientsTitle}>Trusted by:</h2>

                        <div className={styles.clientScroller}>
                            <div className={styles.clientTrack}>
                                {[...clients, ...clients].map((client, index) => (
                                    <div key={index} className={styles.clientItem}>
                                        {client}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}