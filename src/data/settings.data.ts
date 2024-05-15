import { COLORS } from '@/constants/colors.constans'
import {
  EnumSettingsContentActions,
  EnumSettingsTabsValue,
  ILanguagesData,
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
import { useTranslations } from 'next-intl'

export const generateTabsTriggerData = () => {
  const t = useTranslations('Settings')
  const tabsTriggerData: ITabTriggerData[] = [
    {
      lable: `${t('LeftSide.menu-items.my-account')}`,
      value: EnumSettingsTabsValue.myAccount,
      Icon: CircleUserRound,
    },
    {
      lable: `${t('LeftSide.menu-items.my-settings')}`,
      value: EnumSettingsTabsValue.mySettings,
      Icon: SlidersHorizontal,
    },
    {
      lable: `${t('LeftSide.menu-items.my-notifications')}`,
      value: EnumSettingsTabsValue.myNotifications,
      Icon: Bell,
    },
    {
      lable: `${t('LeftSide.menu-items.language')}`,
      value: EnumSettingsTabsValue.language,
      Icon: Globe,
    },
  ]

  return { tabsTriggerData }
}

export const generateWorkspaceTabsTriggerData = () => {
  const t = useTranslations('Settings')

  const workspaceTabsTriggerData: ITabTriggerData[] = [
    {
      Icon: Settings,
      lable: `${t('LeftSide.menu-items.settings')}`,
      value: EnumSettingsTabsValue.settings,
    },
  ]
  return { workspaceTabsTriggerData }
}

export const accountSettingsContentData: ISettingsContentData[] = [
  {
    title: 'Account security',
    content: [
      {
        subTitle: 'Email',
        text: 'gavruluknazar0210@gmail.com',
        actions: EnumSettingsContentActions.commingSoon,
        buttonText: 'Change email',
        disabled: true,
      },
      {
        subTitle: '2-step verification',
        text: 'Add an additional layer of security to your account during login.',
        actions: EnumSettingsContentActions.commingSoon,
        disabled: true,
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
        buttonType: 'logout',
      },
      {
        subTitle: 'Delete my account',
        text: 'Permanently delete the account and remove access from all workspaces.',
        actions: EnumSettingsContentActions.chevron,
        subTitleStyle: `text-red-text`,
        chevronAction() {},
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
        actions: EnumSettingsContentActions.commingSoon,
        disabled: true,
      },
      {
        subTitle: 'Time Zone',
        text: 'Current time zone setting.',
        actions: EnumSettingsContentActions.commingSoon,
        disabled: true,
      },
    ],
  },
  {
    title: 'Privacy',
    content: [
      {
        subTitle: 'Cookie settings',
        text: 'Customize cookies. See {link to cookie notice} for details.',
        actions: EnumSettingsContentActions.commingSoon,
        disabled: true,
      },
      {
        subTitle: 'Profile discoverability',
        text: 'Users with your email can see your name and profile picture when inviting you to a new workspace.',
        actions: EnumSettingsContentActions.commingSoon,
        disabled: true,
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
        actions: EnumSettingsContentActions.language,
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
        actions: EnumSettingsContentActions.commingSoon,
        disabled: true,
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

export const generateLanguagesData = () => {
  const t = useTranslations('Settings')

  const languagesData: ILanguagesData[] = [
    { label: `${t('Language.locale')}`, value: 'en' },
    { label: `${t('Language.locale2')}`, value: 'ua' },
  ]

  return { languagesData }
}
