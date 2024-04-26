'use client'
import { NextPage } from 'next'
import styles from './Block.module.scss'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import SimpleSwitch from '@/components/ui/switchers/simple-switch/SimpleSwitch'
import cn from 'clsx'
import {
  EnumSettingsContentActions,
  ISettingsContentData,
} from '@/types/settings.types'
import { ChevronRight, Info, Languages } from 'lucide-react'
import ButtonSettings from '@/components/ui/buttons/button-settings/ButtonSettings'
import TimeZoneSelect from '@/components/ui/selectors/timezone-select/TimeZoneSelect'
import TooltipComponent from '@/components/ui/tooltip-component/TooltipComponent'
import LanguageSelect from '@/components/ui/selectors/language-select/LanguageSelect'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import ThemeSelect from '@/components/ui/selectors/theme-select/ThemeSelect'
import DialogComponent from '@/components/ui/windows/cofirm-delete-account-component/DialogComponent'
import { useLogout } from '@/api/hooks/auth/useLogout'
interface IProps {
  data: ISettingsContentData
}

const Block: NextPage<IProps> = ({ data }) => {
  const { content, title } = data
  const { logoutMutation } = useLogout()

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
                <DialogComponent>
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
              {el.actions == EnumSettingsContentActions.theme && (
                <ThemeSelect />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Block
