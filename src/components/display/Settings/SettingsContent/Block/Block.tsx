'use client'
import { useLogout } from '@/api/hooks/auth/useLogout'
import ButtonSettings from '@/components/ui/buttons/button-settings/ButtonSettings'
import LanguageSelect from '@/components/ui/selectors/language-select/LanguageSelect'
import TimeZoneSelect from '@/components/ui/selectors/timezone-select/TimeZoneSelect'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import SettingsSkeleton from '@/components/ui/skeletons/SettingsSkeleton/SettingsSkeleton'
import SimpleSwitch from '@/components/ui/switchers/simple-switch/SimpleSwitch'
import TooltipComponent from '@/components/ui/tooltip-component/TooltipComponent'
import DialogComponent from '@/components/ui/windows/cofirm-delete-account-component/DialogComponent'
import {
  EnumSettingsContentActions,
  ISettingsContentData,
} from '@/types/settings.types'
import { IUser } from '@/types/user.type'
import cn from 'clsx'
import { ChevronRight, Info } from 'lucide-react'
import { NextPage } from 'next'
import styles from './Block.module.scss'
interface IProps {
  data: ISettingsContentData
  userData: IUser
}

const Block: NextPage<IProps> = ({ data, userData }) => {
  const { content, title } = data
  const { logoutMutation, isPending } = useLogout()

  if (isPending) {
    return <SettingsSkeleton />
  }

  return (
    <div className={styles.block}>
      <p className={styles.title}>{title}</p>
      <Separator className="mb-2" />

      <div className={styles.content}>
        {content.map((el, index) => (
          <div
            key={index}
            className={cn(styles.row, el.disabled && styles.disabled)}
          >
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
                <ButtonSettings
                  action={
                    el.buttonType === 'logout'
                      ? logoutMutation
                      : el.buttonAction
                  }
                  text={el.buttonText}
                />
              )}
              {el.actions == EnumSettingsContentActions.switch && (
                <SimpleSwitch />
              )}
              {el.actions == EnumSettingsContentActions.chevron && (
                <DialogComponent userData={userData}>
                  <ChevronRight
                    onClick={el.chevronAction}
                    className={styles.chevron}
                  />
                </DialogComponent>
              )}
              {el.actions == EnumSettingsContentActions.timeZone && (
                <TimeZoneSelect />
              )}
              {el.actions == EnumSettingsContentActions.commingSoon && (
                <TooltipComponent text="Soon">
                  <Info className="text-gray size-5" />
                </TooltipComponent>
              )}
              {el.actions == EnumSettingsContentActions.language && (
                <LanguageSelect />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Block
