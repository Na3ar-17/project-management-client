export interface ISettingsContentData {
  title: string
  content: IContent[]
}

export interface IContent {
  subTitle: string
  text: string
  actions: EnumSettingsContentActions
  buttonText?: string
}

export enum EnumSettingsContentActions {
  button = 'button',
  switch = 'switch',
}
