import { NextPage } from 'next'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuShortcut,
} from '@/components/ui/shadcn/ui/context-menu'
import { Pencil, Trash } from 'lucide-react'

import styles from './ContextMenuComponent.module.scss'

interface IProps {
  children: React.ReactNode
  id: string
}

const ContextMenuComponent: NextPage<IProps> = ({ children, id }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className={styles.content}>
        <ContextMenuItem className={styles.item}>
          <p>
            <Trash size={13} className={styles.icon} />
            <span>Edit</span>
          </p>
          <ContextMenuShortcut className={styles.shortCut}>
            Shift + E
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className={styles.item}>
          <p>
            <Pencil size={13} className={styles.icon} />
            <span>Delete</span>
          </p>
          <ContextMenuShortcut className={styles.shortCut}>
            Shift + D
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ContextMenuComponent
