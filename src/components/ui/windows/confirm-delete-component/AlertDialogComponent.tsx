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
import { useTranslations } from 'next-intl'

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
