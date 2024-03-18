import { FC } from 'react'

interface IProps {
  error?: any
  styles?: string
}

const ErrorMessage: FC<IProps> = ({ error, styles }) => {
  return error ? (
    <p
      className={`${
        styles ? styles : ''
      }text-red-text absolute bottom-[-20px] left-[1px]`}
    >
      {error}
    </p>
  ) : null
}

export default ErrorMessage
