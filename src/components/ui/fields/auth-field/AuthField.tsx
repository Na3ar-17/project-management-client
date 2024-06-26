import cn from 'clsx'
import { forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

import ErrorMessage from '../../error-message/ErrorMessage'
import styles from './AuthField.module.scss'

interface IProps {
  type?: string
  placeholder: string
  extra?: string
  style?: string
  iconStyles?: string
  error?: FieldError
  Icon?: React.ElementType
  disabled?: boolean
}

export const AuthField = forwardRef<HTMLInputElement, IProps>(
  (
    {
      type,
      placeholder,
      extra,
      style,
      iconStyles,
      Icon,
      error,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <label className={cn('relative', extra, error && styles.labelError)}>
        {Icon && (
          <Icon
            size={18}
            className={cn(
              error && 'text-red',
              'absolute top-[50%] right-[5px] size-5 transition-all translate-x-[-50%] translate-y-[-50%]',
              iconStyles
            )}
          />
        )}
        <input
          ref={ref}
          {...props}
          className={cn(
            error ? styles.inputError : 'border-border',
            'rounded-md border-solid py-[9px] w-[340px] pl-3 pr-9 text-left',
            style,
            disabled && 'opacity-65 cursor-not-allowed'
          )}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          disabled={disabled}
        />
        <ErrorMessage error={error ? error.message : ''} />
      </label>
    )
  }
)
AuthField.displayName = 'field'
