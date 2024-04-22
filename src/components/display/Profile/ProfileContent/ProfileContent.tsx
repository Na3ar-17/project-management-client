import { NextPage } from 'next'
import styles from './ProfileContent.module.scss'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/shadcn/ui/tabs'
import { Bell, CircleUserRound, Globe, SlidersHorizontal } from 'lucide-react'
import FullUserAvatar from '@/components/ui/avatar/FullUserAvatar/FullUserAvatar'
interface IProps {}

const ProfileContent: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.content}>
      <Tabs defaultValue="my-account" className={styles.tabs}>
        <TabsList className={styles.list}>
          <p className={styles.title}>Account</p>
          <FullUserAvatar className="ml-2" />
          <TabsTrigger className={styles['list-item']} value="my-account">
            <CircleUserRound className={styles.icon} />
            My Account
          </TabsTrigger>
          <TabsTrigger className={styles['list-item']} value="my-settings">
            <SlidersHorizontal className={styles.icon} />
            My Settings
          </TabsTrigger>
          <TabsTrigger className={styles['list-item']} value="my-notifications">
            <Bell className={styles.icon} />
            My Notifications
          </TabsTrigger>
          <TabsTrigger className={styles['list-item']} value="language">
            <Globe className={styles.icon} />
            Language
          </TabsTrigger>
        </TabsList>
        <TabsContent className={styles.item} value="my-account">
          <p className={styles.title}>My profile </p>
          <Separator className={styles.separator} />
        </TabsContent>
        <TabsContent className={styles.item} value="my-settings">
          My Settings
        </TabsContent>
        <TabsContent className={styles.item} value="my-notifications">
          My Notifications
        </TabsContent>
        <TabsContent className={styles.item} value="language">
          Language
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProfileContent
