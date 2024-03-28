export interface IProjectCard {
  id: string
  name: string
  start: string
  end: string
  slug?: string
  image?: string
}

export type TypeSideBarSubMenuElement = Omit<
  IProjectCard,
  'id' | 'start' | 'end' | 'image'
>
