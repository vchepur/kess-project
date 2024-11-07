import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Первый блок с приветствием */}
            <section className={styles.infoSection}>
                <div className={styles.container}>
                    <h1 className={styles.welcomeTitle}>Ваш надежный партнер в мире лодок Gelex — Kessler Boote & Meer</h1>
                    <p className={styles.welcomeText}>
                        С 2016 года мы успешно работаем с дилерами в Германии, Швейцарии, Австрии и Нидерландах, предоставляя доступ к
                        высококачественным алюминиевым лодкам Gelex, идеально подходящим для рыбалки, водного отдыха и коммерческого использования. Наш ассортимент — это сочетание уникального дизайна, технологичности и долговечности, что позволяет нам обеспечивать наших партнёров продукцией, соответствующей самым высоким стандартам.
                    </p>
                </div>
            </section>

            {/* Второй блок - О бренде и преимуществах */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h2 className={styles.aboutTitle}>Превосходство Gelex: безопасность, мощь и инновации</h2>
                        <p className={styles.aboutText}>
                            Лодки Gelex созданы для тех, кто ценит надежность и безопасность на воде. Изготовленные из прочного морского алюминия,
                            они устойчивы к коррозии и защищены от воздействия окружающей среды, что делает их идеальными для использования на соленой воде и в условиях интенсивной эксплуатации. Благодаря специальной обработке и титановому покрытию ENVIROX, эти лодки обеспечивают долговечность и минимальное обслуживание даже при постоянном нахождении на воде.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <img className={styles.aboutImage} src="/home/g5white.png" alt="Лодка Gelex G5.2 на воде" />
                    </div>
                </div>
            </section>

            {/* Третий блок - Легкость и маневренность */}
            <section className={styles.boatsSection}>
                <div className={styles.container}>
                    <h2 className={styles.boatsTitle}>Легкость и маневренность — идеальный выбор для любого приключения</h2>
                    <p className={styles.boatsDescription}>
                        Наши алюминиевые модели, такие как Gelex G4 и Gelex G5.2, предлагают исключительную легкость и маневренность, которые идеально подходят для рыбалки и семейных прогулок. Они быстро выходят на глиссирование и обладают высокой скоростью, что делает их идеальными для активного отдыха на воде. Прочное и легкое алюминиевое основание снижает расход топлива, обеспечивая оптимальную экономичность и простоту в управлении.
                    </p>
                    <div className={styles.boatsGallery}>
                        <div className={styles.boatItem}>
                            <img className={styles.boatImage} src="/home/g4-5gray.png" alt="Лодка Gelex G4.5" />
                            <p className={styles.boatText}>Gelex G4.5 — показывает компактный дизайн и мощные возможности этой модели.</p>
                        </div>
                        <div className={styles.boatItem}>
                            <img className={styles.boatImage} src="/home/fishing.jpg" alt="Рыбалка с Gelex" />
                            <p className={styles.boatText}>Angelboot с оборудованием для рыбалки — демонстрирует функциональные особенности для рыбаков.</p>
                        </div>
                        <div className={styles.boatItem}>
                            <img className={styles.boatImage} src="/home/seadeck.jpg" alt="Покрытие SEADECK" />
                            <p className={styles.boatText}>Вид на лодку Gelex с покрытием SEADECK — акцентирует стильный и практичный внешний вид.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Четвертый блок - О нас */}
            <section className={styles.finalSection}>
                <div className={styles.container}>
                    <h2 className={styles.finalTitle}>Kessler Boote & Meer — ваш партнер с опытом</h2>
                    <p className={styles.finalText}>
                        Мы не просто дистрибьюторы, но и партнеры для наших дилеров, предоставляя полный спектр услуг: от поддержки в выборе подходящих моделей до их обслуживания. Сотрудничество с нами — это доступ к широкому ассортименту, выгодным условиям поставок и постоянной поддержке на всех этапах взаимодействия.
                    </p>
                    <p className={styles.finalText}>
                        С 2016 года мы выстраиваем прочные партнерские отношения, предлагая нашим клиентам продукцию, отвечающую самым высоким требованиям. Станьте частью сети успешных дилеров и предложите своим покупателям лодки, которые покоряют своей безопасностью, стилем и долговечностью.
                    </p>
                </div>
            </section>
        </div>
    );
}
