import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import { NextPage } from 'next'
import { BsThreeDots } from 'react-icons/bs'
import styles from './DropdownMenuComponent.module.scss'
import DialogComponent from '../windows/cofirm-delete-account-component/DialogComponent'
import AlertDialogComponent from '../windows/confirm-delete-component/AlertDialogComponent'
import { useDialog } from '@/zustand/useDialog'

export interface IProps {
  onKick?: () => void
}

const DropdownMenuComponent: NextPage<IProps> = ({ onKick }) => {
  const { onOpen } = useDialog()
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className={styles.trigger}>
          <BsThreeDots className={styles.icon} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.content} align="end">
        <DropdownMenuLabel className={styles.lable}>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={onOpen} className={styles.item}>
          Kick
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.item}>
          Raise the rank
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AlertDialogComponent onDelete={onKick ? onKick : () => {}} />
    </DropdownMenu>
  )
}

export default DropdownMenuComponent
