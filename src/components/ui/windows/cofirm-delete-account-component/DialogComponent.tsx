import { useDeleteUser } from '@/api/hooks/user/useDeleteUser'
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

interface IProps {
  children: React.ReactNode
  userData: IUser
}

const DialogComponent: NextPage<IProps> = ({ children, userData }) => {
  const [userEmail, setUserEmail] = useState<string>('')
  const { deleteUserMutation } = useDeleteUser()

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={styles.content}>
        <DialogHeader className={styles.header}>
          <DialogTitle className="">Are you absolutely sure?</DialogTitle>
          <DialogDescription className="">
            This action cannot be undone. This will permanently delete your
            entire account. All private workspaces will be deleted, and you will
            be removed from all shared workspaces.
          </DialogDescription>

          <p>Please type in your email to confirm.</p>
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
            <ButtonCancel />
          </DialogClose>
          <ButtonDelete
            onClick={() => deleteUserMutation()}
            disabled={userEmail !== userData.email}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogComponent
