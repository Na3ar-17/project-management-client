import { useDashboard } from '@/hooks/useDashboard'
import { ISideBarElement } from '@/types/sidebar-element.type'
import {
  Home,
  Settings,
  LayoutDashboard,
  LayoutGrid,
  ListTodo,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export const useGenerateSideBarElementData = () => {
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
