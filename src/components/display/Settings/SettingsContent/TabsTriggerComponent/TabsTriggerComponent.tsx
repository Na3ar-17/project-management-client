import { TabsTrigger } from '@/components/ui/shadcn/ui/tabs'
import { ITabTriggerData } from '@/types/settings.types'
import { NextPage } from 'next'
import styles from './TabsTriggerComponent.module.scss'
import { Dispatch, SetStateAction } from 'react'
import cn from 'clsx'
import { IUser } from '@/types/user.type'
interface IProps {
  data: ITabTriggerData
  isActive: boolean
  setActive: () => void
}

const TabsTriggerComponent: NextPage<IProps> = ({
  data,
  isActive,
  setActive,
}) => {
  const { Icon, lable, value } = data

  return (
    <TabsTrigger
      className={cn(styles['list-item'], isActive && styles.active)}
      value={value}
      onClick={setActive}
    >
      <Icon className={styles.icon} />
      {lable}
    </TabsTrigger>
  )
}

export default TabsTriggerComponent
