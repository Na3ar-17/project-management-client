import { DASHBOARD } from '@/config/pages-url-config'
import { useDashboard } from '@/hooks/useDashboard'
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
import { useTranslations } from 'next-intl'

export const generateProjectPagesData = ({
  slug,
  id,
}: {
  slug: string
  id: string
}) => {
  const t = useTranslations('Sidebar')
  const { DASHBOARD_PAGES } = useDashboard()
  const projectPagesData: ISideBarElement[] = [
    {
      text: `${t('project.dashboard')}`,
      href: `${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/dashboard`,
      Icon: LayoutDashboard,
    },
    {
      text: `${t('project.tasks')}`,
      Icon: ListTodo,
      href: `${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/tasks`,
    },
  ]
  return projectPagesData
}

export const generateSideBarElementData = () => {
  const { DASHBOARD_PAGES } = useDashboard()
  const t = useTranslations('Sidebar')

  const sideBarElementData: ISideBarElement[] = [
    {
      text: `${t('1')}`,
      Icon: Home,
      href: DASHBOARD_PAGES.HOME,
    },
    {
      text: `${t('2')}`,
      Icon: LayoutGrid,
      href: DASHBOARD_PAGES.PROJECTS,
    },
    {
      text: `${t('3')}`,
      Icon: Settings,
      href: DASHBOARD_PAGES.SETTINGS,
    },
  ]

  return { sideBarElementData }
}

// export const sideBarElementData: ISideBarElement[] = [
//   {
//     text: 'Home',
//     Icon: Home,
//     href: DASHBOARD_PAGES.HOME,
//   },
//   {
//     text: 'Projects',
//     Icon: LayoutGrid,
//     href: DASHBOARD_PAGES.PROJECTS,
//   },
//   {
//     text: 'Profile',
//     Icon: User,
//     href: '/profile',
//   },

//   {
//     text: 'Settings',
//     Icon: Settings,
//     href: DASHBOARD_PAGES.SETTINGS,
//   },
// ]
