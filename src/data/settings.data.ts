import { COLORS } from '@/constants/colors.constans'
import {
  EnumSettingsContentActions,
  EnumSettingsTabsValue,
  ISettingsContentData,
  ITabContentData,
  ITabTriggerData,
} from '@/types/settings.types'
import {
  Bell,
  CircleUserRound,
  Globe,
  SlidersHorizontal,
  Settings,
  ChevronRight,
} from 'lucide-react'

export const tabsTriggerData: ITabTriggerData[] = [
  {
    lable: 'My Account',
    value: EnumSettingsTabsValue.myAccount,
    Icon: CircleUserRound,
  },
  {
    lable: 'My Settings',
    value: EnumSettingsTabsValue.mySettings,
    Icon: SlidersHorizontal,
  },
  {
    lable: 'My Notifications',
    value: EnumSettingsTabsValue.myNotifications,
    Icon: Bell,
  },
  {
    lable: 'Language',
    value: EnumSettingsTabsValue.language,
    Icon: Globe,
  },
]

export const workspaceTabsTriggerData: ITabTriggerData[] = [
  {
    Icon: Settings,
    lable: 'Settings',
    value: EnumSettingsTabsValue.settings,
  },
]

export const accountSettingsContentData: ISettingsContentData[] = [
  {
    title: 'Account security',
    content: [
      {
        subTitle: 'Email',
        text: 'gavruluknazar0210@gmail.com',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Change email',
      },
      {
        subTitle: '2-step verification',
        text: 'Add an additional layer of security to your account during login.',
        actions: EnumSettingsContentActions.switch,
      },
    ],
  },
  {
    title: 'Support',
    content: [
      {
        subTitle: 'Log out',
        text: 'Log out of this device',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Log out',
      },
      {
        subTitle: 'Delete my account',
        text: 'Permanently delete the account and remove access from all workspaces.',
        actions: EnumSettingsContentActions.chevron,
        subTitleStyle: `text-red-text`,
        chevronAction() {
          console.log(1)
        },
      },
    ],
  },
]

export const mySettingsContentData: ISettingsContentData[] = [
  {
    title: 'Date & time',
    content: [
      {
        subTitle: 'Set timezone automatically using your location',
        text: 'Reminders, notifications and emails are delivered based on your time zone.',
        actions: EnumSettingsContentActions.switch,
      },
      {
        subTitle: 'Time Zone',
        text: 'Current time zone setting.',
        actions: EnumSettingsContentActions.timeZone,
      },
    ],
  },
  {
    title: 'Privacy',
    content: [
      {
        subTitle: 'Cookie settings',
        text: 'Customize cookies. See {link to cookie notice} for details.',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Create modal window for cookie settings',
      },
      {
        subTitle: 'Profile discoverability',
        text: 'Users with your email can see your name and profile picture when inviting you to a new workspace.',
        actions: EnumSettingsContentActions.switch,
      },
    ],
  },
]

export const notificationsContentData: ISettingsContentData[] = [
  {
    title: 'Email notifications',
    content: [
      {
        subTitle: 'Activity in your workspace',
        text: 'Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes',
        actions: EnumSettingsContentActions.switch,
      },
      {
        subTitle: 'Always send email notifications',
        text: "Receive emails about activity in your workspace, even when you're active on the app",
        actions: EnumSettingsContentActions.switch,
      },
    ],
  },
]

export const languageContentData: ISettingsContentData[] = [
  {
    title: 'Language & region',
    content: [
      {
        subTitle: 'Language',
        text: 'Change the language used in the user interface.',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Create language select',
      },
    ],
  },
]

export const workspaceSettingsData: ISettingsContentData[] = [
  {
    title: 'Workspace settings',
    content: [
      {
        subTitle: 'Theme',
        text: 'Customize how Proquill looks on your device.',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Create theme select',
      },
    ],
  },
]

export const tabsContentData: ITabContentData[] = [
  {
    value: EnumSettingsTabsValue.myAccount,
    childrens: accountSettingsContentData,
  },
  {
    value: EnumSettingsTabsValue.mySettings,
    childrens: mySettingsContentData,
  },
  {
    value: EnumSettingsTabsValue.myNotifications,
    childrens: notificationsContentData,
  },
  {
    value: EnumSettingsTabsValue.language,
    childrens: languageContentData,
  },
  {
    value: EnumSettingsTabsValue.settings,
    childrens: workspaceSettingsData,
  },
]

export const timeZoneData: { value: string }[] = [
  {
    value: '(GMT-08:00) Pacific Time (US & Canada) (GMT-8)',
  },
  {
    value: '(GMT-05:00) Eastern Time (US & Canada) (GMT-5)',
  },
  {
    value: '(GMT+01:00) Central European Time (GMT+1)',
  },
  {
    value: '(GMT+02:00) Europe/Berlin (GMT+2)',
  },
]
