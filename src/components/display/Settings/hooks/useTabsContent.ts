import {
  generateAccountSettingsContentData,
  generateMySettingsContentData,
  generateNotificationsContentData,
  generateLanguageContentData,
  generateWorkspaceSettingsData,
  generateTabsContentData,
  generateTabsTriggerData,
  generateWorkspaceTabsTriggerData,
} from '@/data/settings.data'

export const useTabsContent = () => {
  const { accountSettingsContentData } = generateAccountSettingsContentData()
  const { mySettingsContentData } = generateMySettingsContentData()
  const { notificationsContentData } = generateNotificationsContentData()
  const { languageContentData } = generateLanguageContentData()
  const { workspaceSettingsData } = generateWorkspaceSettingsData()
  const { tabsContentData } = generateTabsContentData({
    myAccount: accountSettingsContentData,
    mySettings: mySettingsContentData,
    myNotifications: notificationsContentData,
    language: languageContentData,
    settings: workspaceSettingsData,
  })

  const { tabsTriggerData } = generateTabsTriggerData()
  const { workspaceTabsTriggerData } = generateWorkspaceTabsTriggerData()

  return { tabsContentData, tabsTriggerData, workspaceTabsTriggerData }
}
