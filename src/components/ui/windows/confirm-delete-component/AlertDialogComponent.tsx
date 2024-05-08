'use client'
import { NextPage } from 'next'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../shadcn/ui/alert-dialog'
import { useDialog } from '@/zustand/useDialog'
import styles from './AlertDialogComponent.module.scss'
import cn from 'clsx'

interface IProps {
  onDelete: (id: string) => void
}

const AlertDialogComponent: NextPage<IProps> = ({ onDelete }) => {
  const { isOpen, onClose, title, idToDelete } = useDialog()

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose} defaultOpen={isOpen}>
      <AlertDialogContent className={styles.content}>
        <AlertDialogHeader>
          <AlertDialogTitle className={styles.title}>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className={styles.footer}>
          <AlertDialogCancel className={cn(styles.action, styles.cancel)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(idToDelete)}
            className={cn(styles.action, styles.delete)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogComponent
