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
import { useGerProfile } from '@/api/hooks/user/useGerProfile'

interface IProps {}

const SettingsContent: NextPage<IProps> = ({}) => {
  const [active, setActive] = useState<string>('my-account')
  const { data, isFetching, isSuccess } = useGerProfile()

  //TODO Create loader skeleton and handle if !isSuccess
  if (isFetching) {
    return <div>Loading</div>
  }

  if (!data) {
    return <div>No user data available</div>
  }

  return (
    <div className={styles.content}>
      <Tabs defaultValue="my-account" className={styles.tabs}>
        <TabsList className={styles.list}>
          <p className={styles.title}>Account</p>
          <FullUserAvatar data={data} className="ml-2" />
          {tabsTriggerData.map((el, index) => (
            <TabsTriggerComponent
              isActive={active === el.value}
              setActive={() => setActive(el.value)}
              data={el}
              key={index}
            />
          ))}
          <p className={styles.title}>Workspace</p>
          {workspaceTabsTriggerData.map((el, index) => (
            <TabsTriggerComponent
              isActive={active === el.value}
              setActive={() => setActive(el.value)}
              data={el}
              key={index}
            />
          ))}
        </TabsList>
        {tabsContentData.map((el, index) => (
          <TabContent userData={data} key={index} data={el} />
        ))}
      </Tabs>
    </div>
  )
}

export default SettingsContent
