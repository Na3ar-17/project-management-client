import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'

export interface ISettingsContentData {
  title: string
  content: IContent[]
}

export interface IContent {
  subTitle: string
  text: string
  actions: EnumSettingsContentActions
  buttonText?: string
  subTitleStyle?: string
  buttonStyle?: string
  chevronAction?: () => void
  buttonAction?: () => void
}

export enum EnumSettingsContentActions {
  button = 'button',
  switch = 'switch',
  chevron = 'chevron',
  timeZone = 'timeZone',
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
