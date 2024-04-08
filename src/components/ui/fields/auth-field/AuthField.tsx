import { TypeAuthFormLogin, TypeAuthFormRegister } from '@/types/authForm.type'
import { FC, forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

import styles from './AuthField.module.scss'
import ErrorMessage from '../../error-message/ErrorMessage'

interface IProps {
  type?: string
  placeholder: string
  extra?: string
  style?: string
  iconStyles?: string
  error?: FieldError
  Icon?: React.ElementType
}

export const AuthField = forwardRef<HTMLInputElement, IProps>(
  (
    { type, placeholder, extra, style, iconStyles, Icon, error, ...props },
    ref
  ) => {
    return (
      <label
        className={`relative ${extra ? extra : ''} ${
          error ? styles.labelError : ''
        }`}
      >
        {Icon && (
          <Icon
            size={18}
            className={`${
              error ? 'text-red' : ''
            } ${`absolute  top-[50%] right-[5px] transition-all translate-x-[-50%] translate-y-[-50%]`} ${iconStyles}`}
          />
        )}
        <input
          ref={ref}
          {...props}
          className={` ${
            error ? styles.inputError : 'border-border'
          }${' rounded-md border-solid py-[7px] w-[300px] pl-3 pr-9 text-left'} ${
            style ? style : ''
          }`}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
        />
        <ErrorMessage error={error ? error.message : ''} />
      </label>
    )
  }
)

AuthField.displayName = 'field'
