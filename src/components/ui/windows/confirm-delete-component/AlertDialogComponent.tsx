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
import { useDeleteProject } from '@/api/hooks/project/useDeleteProject'
import { useDeleteTask } from '@/api/hooks/tasks/useDeleteTask'

interface IProps {
  onDelete: () => void
}

const AlertDialogComponent: NextPage<IProps> = ({ onDelete }) => {
  const { isOpen, onClose, title } = useDialog()
  const { deleteTaskMutation } = useDeleteTask()

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
            onClick={onDelete}
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
