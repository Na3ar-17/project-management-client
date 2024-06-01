import { useUser } from '@/api/hooks/user/useUser'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/shadcn/ui/dialog'
import { IUser } from '@/types/user.type'
import { DialogClose } from '@radix-ui/react-dialog'
import { NextPage } from 'next'
import { useState } from 'react'
import ButtonCancel from '../../buttons/button-cancel/ButtonCancel'
import ButtonDelete from '../../buttons/button-delete/ButtonDelete'
import SimpleField from '../../fields/simple-field/SimpleField'
import styles from './DialogComponent.module.scss'
import { useTranslations } from 'next-intl'

interface IProps {
  children: React.ReactNode
  userData: IUser
}

const DialogComponent: NextPage<IProps> = ({ children, userData }) => {
  const [userEmail, setUserEmail] = useState<string>('')
  const { useDeleteUser } = useUser()
  const { deleteUserMutation } = useDeleteUser()
  const t = useTranslations('ui.delete-component')

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={styles.content}>
        <DialogHeader className={styles.header}>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>

          <p>{t('text1')}</p>
        </DialogHeader>
        <div className={styles.body}>
          <div className={styles.confirmEmail}>
            <SimpleField
              className="bg-secondary w-full h-10"
              placeholder={userData.email}
              defaultValue={userEmail}
              onInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserEmail(e.currentTarget.value)
              }
            />
          </div>
        </div>
        <DialogFooter className={styles.footer}>
          <DialogClose className="w-full">
            <ButtonCancel text={t('cancel')} />
          </DialogClose>
          <ButtonDelete
            onClick={() => deleteUserMutation()}
            disabled={userEmail !== userData.email}
            text={t('delete')}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogComponent
