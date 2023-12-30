import classNames from 'classnames'
import styles from './Header.module.scss'
import Button from '../../controls/Button/Button'
import Vector from '../../icons/Vector'
import WhiteVector from '../../icons/WhiteVector'

export default function Header() {
  return (
    <header className={classNames(styles.root)}>
      <Button text="Поддержать" />
      <div className={styles.headerHamburger}>
        <div className={styles.headerHamburgerContent}>
          <Vector />
          <Vector />
          <WhiteVector />
        </div>
      </div>
    </header>
  )
}
