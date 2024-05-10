import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import styles from './ButtonCreate.module.scss'
import { Plus } from 'lucide-react'
interface IProps {
  onClick?: () => void
  disabled?: boolean
  text: string
  className?: string
}

const ButtonCreate: NextPage<IProps> = ({
  onClick,
  disabled,
  text,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(styles.create, className)}
    >
      <Plus className={styles.icon} />
      <p>{text}</p>
    </button>
  )
}

export default ButtonCreate
