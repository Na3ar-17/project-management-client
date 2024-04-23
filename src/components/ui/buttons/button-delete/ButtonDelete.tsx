import { NextPage } from 'next'
import styles from './ButtonDelete.module.scss'
interface IProps {}

const ButtonDelete: NextPage<IProps> = ({}) => {
  return <button className={styles.delete}>Delete</button>
}

export default ButtonDelete
