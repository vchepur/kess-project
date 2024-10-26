import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Первый блок с короткой информацией */}
            <section className={styles.infoSection}>
                <div className={styles.container}>
                    <h1>Добро пожаловать в Kessler Boats!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>

            {/* Второй блок - о дистрибьюторе с логотипами */}
            <section className={styles.distributorSection}>
                <div className={styles.container}>
                    <h2>Мы официальный дистрибьютор</h2>
                    <div className={styles.logos}>
                        <div className={styles.logoItem}>
                            <img src="/home/logo_gelex.png" alt="Gelex" width={200} height={200} />
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/home/logo_gala.png" alt="Gala" width={200} height={200} />
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/home/logo_galaxy.png" alt="Galaxy" width={200} height={200} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Третий блок - текст слева, фото справа */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h2>О нас</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem, sit amet interdum leo dapibus eget. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/about-image.jpg" alt="About Us" width={500} height={300} />
                    </div>
                </div>
            </section>
        </div>
    );
}
