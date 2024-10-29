// src/components/TabButtons.js
import styles from './TabButtons.module.scss';

export default function TabButtons({ activeTab, setActiveTab, tabs }) {
    return (
        <div className={styles.tabButtons}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={activeTab === tab.id ? `${styles.button} ${styles.active}` : styles.button}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}