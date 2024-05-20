import {
  useGenerateAccountSettingsContentData,
  useGenerateLanguageContentData,
  useGenerateMySettingsContentData,
  useGenerateNotificationsContentData,
  useGenerateTabsContentData,
  useGenerateTabsTriggerData,
  useGenerateWorkspaceSettingsData,
  useGenerateWorkspaceTabsTriggerData,
} from '@/data/settings.data'

export const useTabsContent = ({ email }: { email: string }) => {
  const { accountSettingsContentData } = useGenerateAccountSettingsContentData({
    email,
  })
  const { mySettingsContentData } = useGenerateMySettingsContentData()
  const { notificationsContentData } = useGenerateNotificationsContentData()
  const { languageContentData } = useGenerateLanguageContentData()
  const { workspaceSettingsData } = useGenerateWorkspaceSettingsData()
  const { tabsContentData } = useGenerateTabsContentData({
    myAccount: accountSettingsContentData,
    mySettings: mySettingsContentData,
    myNotifications: notificationsContentData,
    language: languageContentData,
    settings: workspaceSettingsData,
  })

  const { tabsTriggerData } = useGenerateTabsTriggerData()
  const { workspaceTabsTriggerData } = useGenerateWorkspaceTabsTriggerData()

  return { tabsContentData, tabsTriggerData, workspaceTabsTriggerData }
}
