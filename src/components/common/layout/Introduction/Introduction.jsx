import React from 'react'
import styles from './Introduction.module.scss'
import wide1 from '../../images/wide 1.jpg'
import Button from '../../controls/Button/Button'

export default function Introduction() {
    return (
        <div className={styles.introduction}>
            <div className={styles.introductionContainer}>
                <h1 className={styles.introductionTitle}> Фонд помощи диким животным </h1>
                <p className={styles.introductionText}> Мы защищаем право диких животных на жизнь и благополучие </p>
            </div>

            <img className={styles.introductionImg} src={wide1} alt="" />
            
            <Button text='Я хочу помочь' />
        </div>
    )
}