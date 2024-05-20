'use client'
import { useDialog } from '@/zustand/useDialog'
import cn from 'clsx'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../shadcn/ui/alert-dialog'
import styles from './AlertDialogComponent.module.scss'

interface IProps {
  onDelete: (id: string) => void
}

const AlertDialogComponent: NextPage<IProps> = ({ onDelete }) => {
  const { isOpen, onClose, title, idToDelete } = useDialog()
  const t = useTranslations('ui.delete-component')

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose} defaultOpen={isOpen}>
      <AlertDialogContent className={styles.content}>
        <AlertDialogHeader>
          <AlertDialogTitle className={styles.title}>
            {t('title')}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className={styles.footer}>
          <AlertDialogCancel className={cn(styles.action, styles.cancel)}>
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(idToDelete)}
            className={cn(styles.action, styles.delete)}
          >
            {t('delete')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogComponent
