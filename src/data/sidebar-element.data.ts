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
    href: '/home',
  },
  {
    text: 'Projects',
    Icon: FolderRoot,
    href: '/projects',
  },
  {
    text: 'Profile',
    Icon: User,
    href: '/profile',
  },
  // {
  //   text: 'Team chat',
  //   Icon: MessageCircleMore,
  //   href: '/home',
  // },
  {
    text: 'Settings',
    Icon: Settings,
    href: '/settings',
  },
]
