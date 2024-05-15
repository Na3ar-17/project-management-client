'use client'
import FullUserAvatar from '@/components/ui/avatar/FullUserAvatar/FullUserAvatar'
import { Tabs, TabsList } from '@/components/ui/shadcn/ui/tabs'
import {
  generateTabsTriggerData,
  generateWorkspaceTabsTriggerData,
  generateTabsContentData,
  generateAccountSettingsContentData,
  generateMySettingsContentData,
  generateNotificationsContentData,
  generateLanguageContentData,
  generateWorkspaceSettingsData,
} from '@/data/settings.data'
import { NextPage } from 'next'
import styles from './SettingsContent.module.scss'
import TabsTriggerComponent from './TabsTriggerComponent/TabsTriggerComponent'
import TabContent from './TabContent/TabContent'
import { useState } from 'react'
import { useGetProfile } from '@/api/hooks/user/useGetProfile'
import SettingsSkeleton from '@/components/ui/skeletons/SettingsSkeleton/SettingsSkeleton'
import { useTranslations } from 'next-intl'
import { useTabsContent } from '../hooks/useTabsContent'

interface IProps {}

const SettingsContent: NextPage<IProps> = ({}) => {
  const [active, setActive] = useState<string>('my-account')
  const { data, isFetching, isSuccess } = useGetProfile()

  const { tabsContentData, tabsTriggerData, workspaceTabsTriggerData } =
    useTabsContent()

  const t = useTranslations('Settings.LeftSide')

  //TODO Create loader skeleton and handle if !isSuccess
  if (isFetching) {
    return <SettingsSkeleton />
  }

  if (!data) {
    return <div>No user data available</div>
  }
  return (
    <div className={styles.content}>
      <Tabs defaultValue="my-account" className={styles.tabs}>
        <TabsList className={styles.list}>
          <p className={styles.title}>{t('placeholder1')}</p>
          <FullUserAvatar data={data} className="ml-2" />
          {tabsTriggerData.map((el, index) => (
            <TabsTriggerComponent
              isActive={active === el.value}
              setActive={() => setActive(el.value)}
              data={el}
              key={index}
            />
          ))}
          <p className={styles.title}>{t('placeholder2')}</p>
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
