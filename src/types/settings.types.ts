import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'

export interface ISettingsContentData {
  title?: string
  content: IContent[]
}

export interface IContent {
  subTitle: string
  disabled?: boolean
  text: string
  actions: EnumSettingsContentActions
  buttonText?: string
  subTitleStyle?: string
  buttonStyle?: string
  chevronAction?: () => void
  buttonAction?: () => void
  buttonType?: 'logout'
}

export enum EnumSettingsContentActions {
  button = 'button',
  switch = 'switch',
  chevron = 'chevron',
  timeZone = 'timeZone',
  commingSoon = 'commingSoon',
  language = 'language',
  theme = 'theme',
}

export enum EnumSettingsTabsValue {
  myAccount = 'my-account',
  mySettings = 'my-settings',
  myNotifications = 'my-notifications',
  language = 'language',
  settings = 'settings',
}

export interface ITabTriggerData {
  value: EnumSettingsTabsValue
  Icon: ForwardRefExoticComponent<LucideProps>
  lable: string
}

export interface ITabContentData {
  value: EnumSettingsTabsValue
  childrens: ISettingsContentData[]
}

export interface ILanguagesData {
  label: string
  value: string
}
