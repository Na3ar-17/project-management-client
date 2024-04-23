'use client'
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
import AlertDialogComponent from '../windows/confirm-delete-component/AlertDialogComponent'
import { useDialog } from '@/zustand/useDialog'

interface IProps {
  children: React.ReactNode
  id: string
}

const ContextMenuComponent: NextPage<IProps> = ({ children, id }) => {
  const { onOpen } = useDialog()
  return (
    <ContextMenu modal={false} key={id}>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className={styles.content}>
        <ContextMenuItem className={styles.item}>
          <p>
            <Pencil size={13} className={styles.icon} />
            <span>Edit</span>
          </p>
          <ContextMenuShortcut className={styles.shortCut}>
            Shift + E
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onClick={onOpen} className={styles.item}>
          <p>
            <Trash size={13} className={styles.icon} />
            <span>Delete</span>
          </p>
          <ContextMenuShortcut className={styles.shortCut}>
            Shift + D
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
      <AlertDialogComponent />
    </ContextMenu>
  )
}

export default ContextMenuComponent
