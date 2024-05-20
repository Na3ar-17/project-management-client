import { useDialog } from '@/zustand/useDialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { NextPage } from 'next'
import { BsThreeDots } from 'react-icons/bs'
import AlertDialogComponent from '../windows/confirm-delete-component/AlertDialogComponent'
import styles from './DropdownMenuComponent.module.scss'

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
      </DropdownMenuContent>
      <AlertDialogComponent onDelete={onKick ? onKick : () => {}} />
    </DropdownMenu>
  )
}

export default DropdownMenuComponent
