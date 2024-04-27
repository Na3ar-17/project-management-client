import { NextPage } from 'next'
import styles from './SimpleField.module.scss'
import cn from 'clsx'
import { ChangeEventHandler, forwardRef } from 'react'

interface IProps {
  className?: string
  defaultValue: string
  placeholder?: string
  onInputChange: ChangeEventHandler<HTMLInputElement>
}

const SimpleField = forwardRef<HTMLInputElement, IProps>(
  ({ className, defaultValue, placeholder, onInputChange, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={defaultValue}
        className={cn(styles.input, className ? className : 'bg-border')}
        placeholder={placeholder}
        onChange={onInputChange}
        {...rest}
      />
    )
  }
)

SimpleField.displayName = 'simple-field'

export default SimpleField
