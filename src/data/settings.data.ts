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

export const useGenerateTabsTriggerData = () => {
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

export const useGenerateWorkspaceTabsTriggerData = () => {
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

export const useGenerateAccountSettingsContentData = ({
  email,
}: {
  email: string
}) => {
  const t = useTranslations('Settings.rightSide.accountSettingsContentData')
  const accountSettingsContentData: ISettingsContentData[] = [
    {
      title: `${t('1.title')}`,
      content: [
        {
          subTitle: `${t('1.content.1.subTitle')}`,
          text: email,
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

export const useGenerateMySettingsContentData = () => {
  const t = useTranslations('Settings.rightSide.mySettingsContentData')

  const mySettingsContentData: ISettingsContentData[] = [
    {
      title: `${t('1.title')}`,
      content: [
        {
          subTitle: `${t('1.content.1.subTitle')}`,
          text: `${t('1.content.1.text')}`,
          actions: EnumSettingsContentActions.commingSoon,
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
          actions: EnumSettingsContentActions.commingSoon,
          disabled: true,
        },
      ],
    },
  ]

  return { mySettingsContentData }
}

export const useGenerateNotificationsContentData = () => {
  const t = useTranslations('Settings.rightSide.notificationsContentData')

  const notificationsContentData: ISettingsContentData[] = [
    {
      title: `${t('1.title')}`,
      content: [
        {
          subTitle: `${t('1.content.1.subTitle')}`,
          text: `${t('1.content.1.text')}`,
          actions: EnumSettingsContentActions.commingSoon,
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
  ]

  return { notificationsContentData }
}

export const useGenerateLanguageContentData = () => {
  const t = useTranslations('Settings.rightSide.languageContentData')

  const languageContentData: ISettingsContentData[] = [
    {
      title: `${t('1.title')}`,
      content: [
        {
          subTitle: `${t('1.content.1.subTitle')}`,
          text: `${t('1.content.1.text')}`,
          actions: EnumSettingsContentActions.language,
        },
      ],
    },
  ]

  return { languageContentData }
}

export const useGenerateWorkspaceSettingsData = () => {
  const t = useTranslations('Settings.rightSide.workspaceSettingsData')

  const workspaceSettingsData: ISettingsContentData[] = [
    {
      title: `${t('1.title')}`,
      content: [
        {
          subTitle: `${t('1.content.1.subTitle')}`,
          text: `${t('1.content.1.text')}`,
          actions: EnumSettingsContentActions.commingSoon,
          disabled: true,
        },
      ],
    },
  ]
  return { workspaceSettingsData }
}

export const useGenerateTabsContentData = ({
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

export const useGenerateLanguagesData = () => {
  const t = useTranslations('Settings')

  const languagesData: ILanguagesData[] = [
    { label: `${t('Language.locale')}`, value: 'en' },
    { label: `${t('Language.locale2')}`, value: 'ua' },
  ]

  return { languagesData }
}
