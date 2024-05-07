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

export interface IProps {
  onKick?: () => void
}

const DropdownMenuComponent: NextPage<IProps> = ({ onKick }) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className={styles.trigger}>
          <BsThreeDots className={styles.icon} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.content} align="end">
        <DropdownMenuLabel className={styles.lable}>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={onKick} className={styles.item}>
          Kick
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.item}>
          Raise the rank
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuComponent
