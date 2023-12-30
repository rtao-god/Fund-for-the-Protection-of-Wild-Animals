import styles from './Progress.module.scss'
import ProgressIcon from '../../icons/ProgressIcon'
import ProgressIconActive from '../../icons/ProgressIconActive'

export default function Progress({className}) {
  return (
    <div className={styles.progress}>
      <ProgressIconActive className={className} />
      <ProgressIcon />
    </div>
  )
}
