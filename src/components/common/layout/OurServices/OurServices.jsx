import styles from './OurServices.module.scss'
import Arrow from '../../icons/Arrow'
import dog from '../../images/photo-1590424495720-0ca3a81b9201 1.jpg'
import owl from '../../images/1799291_89-0-1462-1509_1920x0_80_0_0_1c6f8f8b0212fceb5a5d5d02d9c494cc 1.jpg'
import tiger from '../../images/1260392 1.jpg'
import Progress from '../../UI/Progress/Progress'
import Button from '../../controls/Button/Button'

export default function OurServices() {
    return (
        <div className={styles.ourServices}>
            <div className={styles.ourServicesContainer}>
                <h2 className={styles.ourServicesTitle}> Наши услуги </h2>
                <div className={styles.ourServicesContainerArrow}>
                    <Arrow />
                    <Arrow className={styles.ourServicesContainerArrowRight} />
                </div>
            </div>

            <div className={styles.ourServicesContainerSecond}>
                <div className={styles.ourServicesContainerSecondImgContainer}>
                    <img src={dog} alt="" />
                    <p> Ветеринарные услуги  </p>
                </div>
                <div className={styles.ourServicesContainerSecondImgContainer}>
                    <img src={owl} alt="" />
                    <p> Гостиница для диких <br />  животных  </p>
                </div>
                <div className={styles.ourServicesContainerSecondImgContainer} >
                    <img src={tiger} alt="" />
                    <p> Перевозка диких  животных  </p>
                </div>
            </div>

            <Progress className={styles.lol} />
            <Button text="Все услуги" />
        </div>
    )
}
