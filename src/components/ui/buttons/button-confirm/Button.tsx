import { forwardRef } from 'react'
import styles from './Button.module.scss'
import { cn } from '@/lib/utils'
interface IProps {
  text: string
  type: 'submit' | 'reset' | 'button'
  className?: string
  width?: number
  height?: number
  onClick?: () => void
  disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      height = 36,
      width = 150,
      text,
      type,
      disabled = false,
      className,
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        ref={ref}
        {...rest}
        type={type}
        className={cn(
          styles.button,
          className,
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        )}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
)

export default Button
