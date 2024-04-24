export interface IProjectCard {
  id: string
  name: string
  slug?: string
  image?: string
  date: {
    start: string
    end?: string
  }
}

export type TypeSideBarSubMenuElement = Omit<
  IProjectCard,
  'id' | 'date' | 'image'
>

export type TypeEditProjectCard = Omit<IProjectCard, 'slug'>
