'use client'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/shadcn/ui/context-menu'
import { Pencil, Trash } from 'lucide-react'
import { NextPage } from 'next'

import { useDialog } from '@/zustand/useDialog'
import AlertDialogComponent from '../windows/confirm-delete-component/AlertDialogComponent'
import styles from './ContextMenuComponent.module.scss'

interface IProps {
  children: React.ReactNode
  isEdit?: boolean
  onEdit?: () => void
  disabled?: boolean
  onDelete: () => void
}

const ContextMenuComponent: NextPage<IProps> = ({
  children,
  onEdit,
  isEdit = true,
  onDelete,
}) => {
  const { onOpen } = useDialog()

  return (
    <ContextMenu modal={false}>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className={styles.content}>
        {isEdit && (
          <ContextMenuItem onClick={onEdit} className={styles.item}>
            <p>
              <Pencil size={13} className={styles.icon} />
              <span>Edit</span>
            </p>
            <ContextMenuShortcut className={styles.shortCut}>
              Shift + E
            </ContextMenuShortcut>
          </ContextMenuItem>
        )}
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
      <AlertDialogComponent onDelete={onDelete} />
    </ContextMenu>
  )
}

export default ContextMenuComponent
