import {
  EnumSettingsContentActions,
  ISettingsContentData,
} from '@/types/settings.types'

export const settingsContentData: ISettingsContentData[] = [
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
        text: 'Log out of this devices',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Log out',
      },
      {
        subTitle: 'Delete my account',
        text: 'Permanently delete the account and remove access from all workspaces.',
        actions: EnumSettingsContentActions.button,
        buttonText: 'Delete',
      },
    ],
  },
]
