import { NextPage } from 'next'
import styles from './SimpleField.module.scss'
import cn from 'clsx'
import { ChangeEventHandler, forwardRef } from 'react'

interface IProps {
  className?: string
  defaultValue?: string
  placeholder?: string
  onInputChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

const SimpleField = forwardRef<HTMLInputElement, IProps>(
  (
    { className, defaultValue, placeholder, onInputChange, disabled, ...rest },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type="text"
        value={defaultValue}
        className={cn(
          styles.input,
          className ? className : 'bg-border',
          disabled && 'opacity-30 cursor-not-allowed'
        )}
        placeholder={placeholder}
        onChange={onInputChange}
        {...rest}
        autoComplete="off"
        disabled={disabled}
      />
    )
  }
)

SimpleField.displayName = 'simple-field'

export default SimpleField
