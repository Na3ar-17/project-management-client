import cn from 'clsx'
import { forwardRef } from 'react'
import styles from './Button.module.scss'

interface IProps {
  text: string
  type: 'submit' | 'reset' | 'button'
  className?: string
  width?: number
  height?: number
  onClick?: () => void
}

interface IProps {}

const ButtonReject = forwardRef<HTMLButtonElement, IProps>(
  (
    { height = 36, width = 150, text, type, className, onClick, ...rest },
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
        className={cn(styles.button, className)}
      >
        {text}
      </button>
    )
  }
)

ButtonReject.displayName = 'ButtonReject'

export default ButtonReject
