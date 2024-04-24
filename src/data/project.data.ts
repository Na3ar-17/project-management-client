import { IProjectCard, TypeSideBarSubMenuElement } from '@/types/project.types'
export const projectCardData: IProjectCard[] = [
  {
    id: 'asaaa',
    name: 'Social Media',
    date: {
      start: '25.03.2024',
      end: '01.05.2024',
    },
    slug: 'socila_media',
  },
  {
    id: 'assd',
    name: 'Chat app',
    date: {
      start: '30.04.2024',
      end: '07.06.2024',
    },
    slug: 'chat_app',
  },
  {
    id: 'asgfdfg',
    name: 'Gaming Service',
    date: {
      start: '01.05.2024',
      end: '06.08.2024',
    },
    image: '',
    slug: 'gaming_service',
  },
  {
    id: 'askllml',
    name: 'Project Management App',
    date: {
      start: '25.03.2024',
      end: '01.05.2024',
    },
    slug: 'project_management_app',
  },
]

export const projectsNameAndSlug: TypeSideBarSubMenuElement[] = [
  { name: 'Social Media', slug: 'socila_media' },
  { name: 'Chat app', slug: 'chat_app' },
  { name: 'Gaming Service', slug: 'gaming_service' },
  { name: 'Project Management App', slug: 'project_management_app' },
]
