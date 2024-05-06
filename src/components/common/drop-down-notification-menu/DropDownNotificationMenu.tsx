import { NextPage } from 'next'
import styles from './DropDownNotificationMenu.module.scss'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/shadcn/ui/dropdown-menu'
import Notification from './notification/Notification'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import { INotifications } from '@/types/notifications.types'
import { useSeeNotifications } from '@/api/hooks/notifications/useSeeNotifications'
import { useEffect } from 'react'
interface IProps {
  children: React.ReactNode
  data: INotifications[]
}

const DropDownNotificationMenu: NextPage<IProps> = ({ children, data }) => {
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className={styles.trigger}>{children}</div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={styles.dropdown} align="end">
          <p className={styles.title}>My notifications</p>
          <div className={styles.content}>
            <ScrollArea className="h-[280px]">
              {data.length <= 0 ? (
                // TODO handle empty array
                <div>Empty</div>
              ) : (
                data.map((el, index) => <Notification data={el} key={index} />)
              )}
            </ScrollArea>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropDownNotificationMenu
