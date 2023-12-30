import styles from './AboutUs.module.scss'
import photo1552833172 from '../../images/photo-1552833172-fd5ac167c18c 1.jpg'
import wildCat from '../../images/WildCat-16 3.jpg'
import Button from '../../controls/Button/Button'

export default function AboutUs() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsContainer}>
                <p className={styles.aboutUsContainerText}>
                    <h2 className={styles.aboutUsTitle}>О нас</h2>
                    Мы – фонд для диких животных, и наша миссия заключается в том, чтобы защитить и сохранить животный мир нашей планеты.
                    Мы верим, что каждый из нас может внести свой вклад в этот процесс, начиная с маленьких шагов. Мы работаем над тем, чтобы обеспечить безопасное место обитания для диких животных и предотвратить их вымирание. Мы проводим исследования, разрабатываем программы по сохранению видов и обучаем людей,
                    как правильно взаимодействовать с животными.
                </p>
                <div className={styles.aboutUsContainerTwo} >
                    <img className={styles.aboutUsContainerTwoFirstImg} src={photo1552833172} alt="" />
                    <img className={styles.aboutUsContainerTwoSecondImg} src={wildCat} alt="" />
                </div>
            </div>

            <div className={styles.aboutUsTop}>
                <Button text='Я хочу помочь' />
            </div>
        </div>
    )
}
