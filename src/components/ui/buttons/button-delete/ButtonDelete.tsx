import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import styles from './ButtonDelete.module.scss'
interface IProps {
  disabled?: boolean
  onClick?: () => void
}

const ButtonDelete: NextPage<IProps> = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        styles.delete,
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      Delete
    </button>
  )
}

export default ButtonDelete
