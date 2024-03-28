import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { ISideBarElement } from '@/types/sidebar-element.type'
import {
  Home,
  Settings,
  FolderRoot,
  MessageCircleMore,
  User,
} from 'lucide-react'

export const sideBarElementData: ISideBarElement[] = [
  {
    text: 'Home',
    Icon: Home,
    href: DASHBOARD_PAGES.HOME,
  },
  {
    text: 'Projects',
    Icon: FolderRoot,
    href: DASHBOARD_PAGES.PROJECTS,
  },
  {
    text: 'Profile',
    Icon: User,
    href: '',
  },
  // {
  //   text: 'Team chat',
  //   Icon: MessageCircleMore,
  //   href: '/home',
  // },
  {
    text: 'Settings',
    Icon: Settings,
    href: DASHBOARD_PAGES.SETTINGS,
  },
]
