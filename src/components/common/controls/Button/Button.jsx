import styles from './Button.module.scss';
import Paw from '../../icons/Paw';
import PawText from '../../icons/PawText';

export default function Button({ text }) {
    return (
        <div className={styles.buttonControlsWrapper}>
            <div className={styles.buttonControls}>
                <div className={styles.buttonControlsContainer}>
                    <Paw />
                    <PawText className={styles.buttonControlsText} text={text} />
                </div>
            </div>
        </div>
    );
}
