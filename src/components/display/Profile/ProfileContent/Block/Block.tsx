import { NextPage } from 'next'
import styles from './Block.module.scss'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import SimpleSwitch from '@/components/ui/switchers/simple-switch/SimpleSwitch'
import cn from 'clsx'
import {
  EnumSettingsContentActions,
  ISettingsContentData,
} from '@/types/settings.types'
import { ChevronRight, Info } from 'lucide-react'
import ButtonSettings from '@/components/ui/buttons/button-settings/ButtonSettings'
import TimeZoneSelect from '@/components/ui/selectors/timezone-select/TimeZoneSelect'
interface IProps {
  data: ISettingsContentData
}

const Block: NextPage<IProps> = ({ data }) => {
  const { content, title } = data
  return (
    <div className={styles.block}>
      <p className={styles.title}>{title}</p>
      <Separator className="mb-2" />

      <div className={styles.content}>
        {content.map((el) => (
          <div className={styles.row}>
            <div className={styles.group}>
              <span
                className={cn(styles.subTitle, el.subTitleStyle || 'text-text')}
              >
                {el.subTitle}
              </span>
              <p className={styles.text}>{el.text}</p>
            </div>
            <div className={styles.action}>
              {el.actions == EnumSettingsContentActions.button && (
                <ButtonSettings action={el.buttonAction} text={el.buttonText} />
              )}
              {el.actions == EnumSettingsContentActions.switch && (
                <SimpleSwitch />
              )}
              {el.actions == EnumSettingsContentActions.chevron && (
                <ChevronRight
                  onClick={el.chevronAction}
                  className={styles.chevron}
                />
              )}
              {el.actions == EnumSettingsContentActions.timeZone && (
                <TimeZoneSelect />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Block
