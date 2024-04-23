import { NextPage } from 'next'
import styles from './ButtonCancel.module.scss'
interface IProps {
  text?: string
}

const ButtonCancel: NextPage<IProps> = ({ text = 'Cancel' }) => {
  return <button className={styles.cancel}>{text}</button>
}

export default ButtonCancel
