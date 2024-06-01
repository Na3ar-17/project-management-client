import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import styles from './ButtonDelete.module.scss'
interface IProps {
  disabled?: boolean
  onClick?: () => void
  text?: string
}

const ButtonDelete: NextPage<IProps> = ({ disabled, onClick, text }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        styles.delete,
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      {text}
    </button>
  )
}

export default ButtonDelete
