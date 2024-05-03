import { NextPage } from 'next'
import styles from './DropDownNotificationMenu.module.scss'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from '@/components/ui/shadcn/ui/dropdown-menu'
import Notification from './notification/Notification'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
interface IProps {
  children: React.ReactNode
}

const DropDownNotificationMenu: NextPage<IProps> = ({ children }) => {
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className={styles.trigger}>{children}</div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={styles.dropdown} align="end">
          <p className={styles.title}>My notifications</p>
          <div className={styles.content}>
            <ScrollArea className="h-[220px]">
              {Array.from({ length: 5 }).map((el, index) => (
                <Notification key={index} />
              ))}
            </ScrollArea>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropDownNotificationMenu
