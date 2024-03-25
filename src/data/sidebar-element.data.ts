import { ISideBarElement } from '@/types/sidebar-element.type'
import {
  Home,
  Settings,
  Maximize2,
  Minimize,
  LayoutDashboard,
  FolderRoot,
  MessageCircleMore,
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
    href: '/home',
  },
  {
    text: 'Team chat',
    Icon: MessageCircleMore,
    href: '/home',
  },
  {
    text: 'Settings',
    Icon: Settings,
    href: '/settings',
  },
]
