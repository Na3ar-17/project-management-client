'use client'
import FullUserAvatar from '@/components/ui/avatar/FullUserAvatar/FullUserAvatar'
import { Tabs, TabsList } from '@/components/ui/shadcn/ui/tabs'
import {
  tabsContentData,
  tabsTriggerData,
  workspaceTabsTriggerData,
} from '@/data/settings.data'
import { NextPage } from 'next'
import styles from './SettingsContent.module.scss'
import TabsTriggerComponent from './TabsTriggerComponent/TabsTriggerComponent'
import TabContent from './TabContent/TabContent'
import { useState } from 'react'

interface IProps {}

const SettingsContent: NextPage<IProps> = ({}) => {
  const [active, setActive] = useState<string>('my-account')
  return (
    <div className={styles.content}>
      <Tabs defaultValue="my-account" className={styles.tabs}>
        <TabsList className={styles.list}>
          <p className={styles.title}>Account</p>
          <FullUserAvatar className="ml-2" />
          {tabsTriggerData.map((el) => (
            <TabsTriggerComponent
              isActive={active === el.value}
              setActive={() => setActive(el.value)}
              data={el}
            />
          ))}
          <p className={styles.title}>Workspace</p>
          {workspaceTabsTriggerData.map((el) => (
            <TabsTriggerComponent
              isActive={active === el.value}
              setActive={() => setActive(el.value)}
              data={el}
            />
          ))}
        </TabsList>
        {tabsContentData.map((el) => (
          <TabContent key={el.value} data={el} />
        ))}
      </Tabs>
    </div>
  )
}

export default SettingsContent
