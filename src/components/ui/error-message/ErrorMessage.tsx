import { FC } from 'react'
import cn from 'clsx'
import styles from './ErrorMessage.module.scss'
interface IProps {
  error?: any
  style?: string
}

const ErrorMessage: FC<IProps> = ({ error, style }) => {
  return error ? <p className={cn(style, styles.text)}>{error}</p> : null
}

export default ErrorMessage
