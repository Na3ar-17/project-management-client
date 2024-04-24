import { NextPage } from 'next'
import styles from './ViewType.module.scss'
import { IViewType, TypeViewType } from '@/types/tasks.types'
import cn from 'clsx'
interface IProps {
  data: IViewType
  type: TypeViewType
  onChange: () => void
}

const ViewType: NextPage<IProps> = ({ data, type, onChange }) => {
  const { Icon, lable, value } = data
  return (
    <div
      onClick={onChange}
      className={cn(styles.type, type === value && styles.current)}
    >
      <Icon className={styles.icon} />
      <p>{lable}</p>
    </div>
  )
}

export default ViewType
