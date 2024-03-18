import { FC } from 'react'
import styles from './Button.module.scss'

interface IProps {
  text: string
  type: 'submit' | 'reset' | 'button' | undefined
  props?: any
}

const Button: FC<IProps> = ({ text, type, props }) => {
  return (
    <button {...props} type={type} className={`${styles.button} `}>
      {text}
    </button>
  )
}

export default Button
