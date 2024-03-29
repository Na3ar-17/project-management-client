import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { ISideBarElement } from '@/types/sidebar-element.type'
import {
  Home,
  Settings,
  FolderRoot,
  MessageCircleMore,
  Database,
  User,
  UsersRound,
  LayoutDashboard,
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
    childrens: [
      {
        text: 'Chat App',
        href: '/',
        childrens: [
          { text: 'Dashboard', href: '/', Icon: LayoutDashboard },
          { text: 'Members', href: '/', Icon: UsersRound },
          {
            text: 'Team chat',
            Icon: MessageCircleMore,
            href: '/home',
          },
        ],
      },
    ],
  },
  {
    text: 'Profile',
    Icon: User,
    href: '',
  },

  {
    text: 'Settings',
    Icon: Settings,
    href: DASHBOARD_PAGES.SETTINGS,
  },
]
