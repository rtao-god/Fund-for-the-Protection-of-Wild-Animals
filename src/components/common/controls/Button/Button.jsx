import styles from './Button.module.scss';
import Paw from '../../icons/Paw';
import PawText from '../../icons/PawText';

export default function Button({ flexEnd, text }) {
    const buttonClass = flexEnd ? `${styles.buttonControlsWrapper} ${styles.flexEnd}` : styles.buttonControlsWrapper;

    return (
        <div className={buttonClass}>
            <div className={styles.buttonControls}>
                <div className={styles.buttonControlsContainer}>
                    <Paw />
                    <PawText className={styles.buttonControlsText} text={text} />
                </div>
            </div>
        </div>
    );
}
