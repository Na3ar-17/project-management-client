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

interface IProps {
  id?: string
}

const AlertDialogComponent: NextPage<IProps> = ({ id }) => {
  const { isOpen, onClose, title } = useDialog()
  const { deleteProjectMutation } = useDeleteProject()

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
            onClick={() => deleteProjectMutation(id || '')}
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
