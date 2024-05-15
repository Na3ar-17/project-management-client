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

export const generateAccountSettingsContentData = () => {
  const t = useTranslations('Settings.rightSide.accountSettingsContentData')
  const accountSettingsContentData: ISettingsContentData[] = [
    {
      title: `${t('1.title')}`,
      content: [
        {
          subTitle: `${t('1.content.1.subTitle')}`,
          text: 'gavruluknazar0210@gmail.com',
          actions: EnumSettingsContentActions.commingSoon,
          buttonText: 'Change email',
          disabled: true,
        },
        {
          subTitle: `${t('1.content.2.subTitle')}`,
          text: `${t('1.content.2.text')}`,
          actions: EnumSettingsContentActions.commingSoon,
          disabled: true,
        },
      ],
    },
    {
      title: `${t('2.title')}`,
      content: [
        {
          subTitle: `${t('2.content.1.subTitle')}`,
          text: `${t('2.content.1.text')}`,
          actions: EnumSettingsContentActions.button,
          buttonText: `${t('2.content.1.buttonText')}`,
          buttonType: 'logout',
        },
        {
          subTitle: `${t('2.content.2.subTitle')}`,
          text: `${t('2.content.2.text')}`,
          actions: EnumSettingsContentActions.chevron,
          subTitleStyle: `text-red-text`,
          chevronAction() {},
        },
      ],
    },
  ]

  return { accountSettingsContentData }
}

export const generateMySettingsContentData = () => {
  const mySettingsContentData: ISettingsContentData[] = [
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

  return { mySettingsContentData }
}

export const generateNotificationsContentData = () => {
  const notificationsContentData: ISettingsContentData[] = [
    {
      title: 'Email notifications',
      content: [
        {
          subTitle: 'Activity in your workspace',
          text: 'Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes',
          actions: EnumSettingsContentActions.commingSoon,
          disabled: true,
        },
        {
          subTitle: 'Always send email notifications',
          text: "Receive emails about activity in your workspace, even when you're active on the app",
          actions: EnumSettingsContentActions.commingSoon,
          disabled: true,
        },
      ],
    },
  ]

  return { notificationsContentData }
}

export const generateLanguageContentData = () => {
  const languageContentData: ISettingsContentData[] = [
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

  return { languageContentData }
}

export const generateWorkspaceSettingsData = () => {
  const workspaceSettingsData: ISettingsContentData[] = [
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
  return { workspaceSettingsData }
}

export const generateTabsContentData = ({
  myAccount,
  mySettings,
  myNotifications,
  language,
  settings,
}: {
  myAccount: ISettingsContentData[]
  mySettings: ISettingsContentData[]
  myNotifications: ISettingsContentData[]
  language: ISettingsContentData[]
  settings: ISettingsContentData[]
}) => {
  const tabsContentData: ITabContentData[] = [
    {
      value: EnumSettingsTabsValue.myAccount,
      childrens: myAccount,
    },
    {
      value: EnumSettingsTabsValue.mySettings,
      childrens: mySettings,
    },
    {
      value: EnumSettingsTabsValue.myNotifications,
      childrens: myNotifications,
    },
    {
      value: EnumSettingsTabsValue.language,
      childrens: language,
    },
    {
      value: EnumSettingsTabsValue.settings,
      childrens: settings,
    },
  ]
  return { tabsContentData }
}

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
