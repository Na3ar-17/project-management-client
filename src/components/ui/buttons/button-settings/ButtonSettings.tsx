import { NextPage } from 'next'
import styles from './ButtonSettings.module.scss'

interface IProps {
  action: (() => void) | undefined
  text: string | undefined
}

const ButtonSettings: NextPage<IProps> = ({ action, text }) => {
  return (
    <button onClick={action} className={styles.btn}>
      {text}
    </button>
  )
}

export default ButtonSettings
