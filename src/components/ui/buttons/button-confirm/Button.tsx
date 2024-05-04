import { forwardRef } from 'react'
import styles from './Button.module.scss'
import cn from 'clsx'
interface IProps {
  text: string
  type: 'submit' | 'reset' | 'button'
  className?: string
  width?: number
  height?: number
}

const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ height = 36, width = 150, text, type, className, ...rest }, ref) => {
    return (
      <button
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

export default Button
