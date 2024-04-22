import { FC, forwardRef } from 'react'
import styles from './Button.module.scss'

interface IProps {
  text: string
  type: 'submit' | 'reset' | 'button' | undefined
}

const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ text, type, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} type={type} className={styles.button}>
        {text}
      </button>
    )
  }
)

export default Button
