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

const DropdownMenuComponent: NextPage = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className={styles.trigger}>
          <BsThreeDots className={styles.icon} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.content} align="end">
        <DropdownMenuLabel className={styles.lable}>Actions</DropdownMenuLabel>
        <DropdownMenuItem className={styles.item}>Delete</DropdownMenuItem>
        <DropdownMenuItem className={styles.item}>
          Raise the rank
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuComponent
