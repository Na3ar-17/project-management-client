import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { ISideBarElement } from '@/types/sidebar-element.type'
import {
  Home,
  Settings,
  MessageCircleMore,
  User,
  UsersRound,
  LayoutDashboard,
  LayoutGrid,
  ListTodo,
} from 'lucide-react'

export const generateProjectPagesData = ({
  slug,
  id,
}: {
  slug: string
  id: string
}) => {
  const projectPagesData: ISideBarElement[] = [
    {
      text: 'Dashboard',
      href: `${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/dashboard`,
      Icon: LayoutDashboard,
    },
    {
      text: 'Tasks',
      Icon: ListTodo,
      href: `${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/tasks`,
    },
  ]
  return projectPagesData
}

export const sideBarElementData: ISideBarElement[] = [
  {
    text: 'Home',
    Icon: Home,
    href: DASHBOARD_PAGES.HOME,
  },
  {
    text: 'Projects',
    Icon: LayoutGrid,
    href: DASHBOARD_PAGES.PROJECTS,
  },
  {
    text: 'Profile',
    Icon: User,
    href: '/profile',
  },

  {
    text: 'Settings',
    Icon: Settings,
    href: DASHBOARD_PAGES.SETTINGS,
  },
]
