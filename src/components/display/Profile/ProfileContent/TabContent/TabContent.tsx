import { EnumSettingsTabsValue, ITabContentData } from '@/types/settings.types'
import { TabsContent } from '@radix-ui/react-tabs'
import { NextPage } from 'next'
import styles from './TabContent.module.scss'
import Block from '../Block/Block'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
interface IProps {
  data: ITabContentData
}

const TabContent: NextPage<IProps> = ({ data }) => {
  const { childrens, value } = data

  return (
    <TabsContent className={styles.item} value={value}>
      {value === EnumSettingsTabsValue.myAccount && (
        <>
          <p className={styles.title}>My profile </p>
          <Separator className={styles.separator} />
          <div className={styles.info}>
            <AvatarComponent size={60} avatarStyles="w-fit" />
            <div className={styles.group}>
              <span>Preferred name</span>
              <input
                type="text"
                value={'Гаврилик Назар'}
                className={styles.input}
              />
            </div>
          </div>
        </>
      )}
      {childrens.map((el) => (
        <Block data={el} />
      ))}
    </TabsContent>
  )
}

export default TabContent