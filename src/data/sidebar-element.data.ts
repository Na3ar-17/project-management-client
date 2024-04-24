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
    childrens: [
      {
        text: 'Chat App',
        href: '/home',
        childrens: [
          {
            text: 'Dashboard',
            href: `${DASHBOARD_PAGES.PROJECTS}/chat_app/dashboard`,
            Icon: LayoutDashboard,
          },
          {
            text: 'Members',
            href: `${DASHBOARD_PAGES.PROJECTS}/chat_app/members`,
            Icon: UsersRound,
          },
          {
            text: 'Team chat',
            Icon: MessageCircleMore,
            href: `${DASHBOARD_PAGES.PROJECTS}/chat_app/chat`,
          },
          {
            text: 'Tasks',
            Icon: ListTodo,
            href: `${DASHBOARD_PAGES.PROJECTS}/chat_app/tasks`,
          },
        ],
      },
      {
        text: 'Project Management App',
        href: '/home',
        childrens: [
          { text: 'Dashboard', href: '/home', Icon: LayoutDashboard },
          { text: 'Members', href: '/home', Icon: UsersRound },
          {
            text: 'Team chat',
            Icon: MessageCircleMore,
            href: '/home',
          },
          {
            text: 'Tasks',
            Icon: ListTodo,
            href: '/home',
          },
        ],
      },
    ],
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
