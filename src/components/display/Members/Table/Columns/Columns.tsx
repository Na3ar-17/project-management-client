import { NextPage } from 'next'
import styles from './Columns.module.scss'
import { ITableColumns } from '@/types/members.type'

interface IProps {
  columnsData: ITableColumns[]
}

const Columns: NextPage<IProps> = ({ columnsData }) => {
  return (
    <div className={styles.columns}>
      {columnsData.map((el, index) => (
        <div key={index} className={styles.column}>
          <p className={styles.lable}>{el.lable}</p>
        </div>
      ))}
    </div>
  )
}

export default Columns
