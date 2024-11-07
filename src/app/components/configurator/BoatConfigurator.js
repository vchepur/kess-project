// // components/BoatConfigurator.js
// "use client";
//
// import { useState, useRef } from 'react';
// import ModalEasy from '../gallery/modalEasy/ModalEasy'; // Импортируем упрощенный модальный компонент
// import styles from './BoatConfigurator.module.scss';
//
// export default function BoatConfigurator({ steps }) {
//     const [currentStep, setCurrentStep] = useState(0);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [showSummary, setShowSummary] = useState(false);
//     const [popupImage, setPopupImage] = useState(null); // Изображение для модального окна
//     const stepRefs = useRef([]);
//
//     const handleOptionSelect = (option, stepIndex) => {
//         const updatedOptions = [...selectedOptions];
//         updatedOptions[stepIndex] = option;
//         setSelectedOptions(updatedOptions);
//     };
//
//     const handleNextStep = () => {
//         if (currentStep < steps.length - 1) {
//             setCurrentStep(currentStep + 1);
//             setTimeout(() => {
//                 stepRefs.current[currentStep + 1]?.scrollIntoView({ behavior: 'smooth' });
//             }, 200);
//         } else {
//             setShowSummary(true);
//         }
//     };
//
//     const handleImageClick = (image) => {
//         setPopupImage(image); // Открываем модальное окно с выбранным изображением
//     };
//
//     const closeModal = () => {
//         setPopupImage(null); // Закрываем модальное окно
//     };
//
//     const calculateTotalPrice = () => {
//         return selectedOptions.reduce((sum, option) => sum + (option?.price || 0), 0);
//     };
//
//     return (
//         <div className={styles.configurator}>
//             {steps.map((step, stepIndex) => (
//                 <div
//                     key={stepIndex}
//                     ref={(el) => (stepRefs.current[stepIndex] = el)}
//                     className={`${styles.stepSection} ${stepIndex > currentStep ? styles.hidden : ''}`}
//                 >
//                     <h2>{step.title}</h2>
//                     <div className={styles.options}>
//                         {step.options.map((option) => (
//                             <div
//                                 key={option.name}
//                                 className={`${styles.option} ${
//                                     selectedOptions[stepIndex]?.name === option.name ? styles.selected : ''
//                                 }`}
//                                 onClick={() => handleOptionSelect(option, stepIndex)}
//                             >
//                                 <div className={styles.imageContainer}>
//                                     <img src={option.image} alt={option.name} />
//                                     <span className={styles.zoomIcon} onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleImageClick(option.image); // Открываем модальное окно с изображением
//                                     }}>⤢</span>
//                                 </div>
//                                 <p>{option.name}</p>
//                                 <p>{option.price} €</p>
//                             </div>
//                         ))}
//                     </div>
//                     {stepIndex === currentStep && (
//                         <button
//                             className={styles.nextButton}
//                             onClick={handleNextStep}
//                             disabled={!selectedOptions[stepIndex]}
//                         >
//                             {stepIndex === steps.length - 1 ? "Kosten anzeigen" : "Weiter"}
//                         </button>
//                     )}
//                 </div>
//             ))}
//
//             {showSummary && (
//                 <div className={styles.summary}>
//                     <h2>Ihre Auswahl</h2>
//                     <ul>
//                         {selectedOptions.map((option, index) => (
//                             <li key={index}>{option.name}: {option.price} €</li>
//                         ))}
//                     </ul>
//                     <p><strong>Gesamtpreis: {calculateTotalPrice()} €</strong></p>
//                 </div>
//             )}
//
//             {popupImage && (
//                 <ModalEasy
//                     image={popupImage}
//                     alt="Fullscreen Image"
//                     onClose={closeModal}
//                 />
//             )}
//         </div>
//     );
// }

// components/BoatConfigurator.js
"use client";

import { useState, useRef } from 'react';
import ModalEasy from '../gallery/modalEasy/ModalEasy'; // Импортируем упрощенный модальный компонент
import styles from './BoatConfigurator.module.scss';

export default function BoatConfigurator({ steps }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [popupImage, setPopupImage] = useState(null); // Изображение для модального окна
    const stepRefs = useRef([]);

    const handleOptionSelect = (option, stepIndex) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[stepIndex] = option;
        setSelectedOptions(updatedOptions);
    };

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setTimeout(() => {
                stepRefs.current[currentStep + 1]?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        } else {
            setShowSummary(true);
        }
    };

    const handleImageClick = (image) => {
        setPopupImage(image); // Открываем модальное окно с выбранным изображением
    };

    const closeModal = () => {
        setPopupImage(null); // Закрываем модальное окно
    };

    const calculateTotalPrice = () => {
        return selectedOptions.reduce((sum, option) => sum + (option?.price || 0), 0);
    };

    return (
        <div className={styles.configurator}>
            {steps.map((step, stepIndex) => (
                <div
                    key={stepIndex}
                    ref={(el) => (stepRefs.current[stepIndex] = el)}
                    className={`${styles.stepSection} ${stepIndex > currentStep ? styles.hidden : ''}`}
                >
                    <h2>{step.title}</h2>
                    <div className={styles.options}>
                        {step.options.map((option) => (
                            <div
                                key={option.name}
                                className={`${styles.option} ${
                                    selectedOptions[stepIndex]?.name === option.name ? styles.selected : ''
                                }`}
                                onClick={() => handleOptionSelect(option, stepIndex)}
                            >
                                {option.image && (
                                    <div className={styles.imageContainer}>
                                        <img src={option.image} alt={option.name} />
                                        <span
                                            className={styles.zoomIcon}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleImageClick(option.image); // Открываем модальное окно с изображением
                                            }}
                                        >
                                            ⤢
                                        </span>
                                    </div>
                                )}
                                <p>{option.name}</p>
                                <p>{option.price} €</p>
                            </div>
                        ))}
                    </div>
                    {stepIndex === currentStep && (
                        <button
                            className={styles.nextButton}
                            onClick={handleNextStep}
                            disabled={!selectedOptions[stepIndex]}
                        >
                            {stepIndex === steps.length - 1 ? "Kosten anzeigen" : "Weiter"}
                        </button>
                    )}
                </div>
            ))}

            {showSummary && (
                <div className={styles.summary}>
                    <h2>Ihre Auswahl</h2>
                    <ul>
                        {selectedOptions.map((option, index) => (
                            <li key={index}>{option.name}: {option.price} €</li>
                        ))}
                    </ul>
                    <p><strong>Gesamtpreis: {calculateTotalPrice()} €</strong></p>
                </div>
            )}

            {popupImage && (
                <ModalEasy
                    image={popupImage}
                    alt="Fullscreen Image"
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

