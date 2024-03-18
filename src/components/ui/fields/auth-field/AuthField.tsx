import { TypeAuthFormLogin, TypeAuthFormRegister } from '@/types/authForm.type'
import { forwardRef } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import styles from './AuthField.module.scss'

interface IProps {
  type?: string
  placeholder: string
  extra?: string
  style?: string
  iconStyles?: string
  error?: FieldErrors<TypeAuthFormRegister | TypeAuthFormLogin>
  Icon?: React.ElementType
}

export const AuthField = forwardRef<HTMLInputElement, IProps>(
  (
    { type, placeholder, extra, style, iconStyles, Icon, error, ...props },
    ref
  ) => {
    return (
      <label className={`relative ${extra ? extra : ''}`}>
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
            error ? styles.error : 'border-border'
          }${' rounded-md border-solid py-[7px] w-[300px] pl-3 pr-9 text-left'} ${
            style ? style : ''
          }`}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
        />
      </label>
    )
  }
)

AuthField.displayName = 'field'
