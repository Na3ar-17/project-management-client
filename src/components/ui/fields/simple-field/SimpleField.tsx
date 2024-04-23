import { NextPage } from 'next'
import styles from './SimpleField.module.scss'
import cn from 'clsx'
import { forwardRef } from 'react'

interface IProps {
  className?: string
  defaultValue?: string
  placeholder?: string
}

const SimpleField = forwardRef<HTMLInputElement, IProps>(
  ({ className, defaultValue, placeholder, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={defaultValue}
        className={cn(styles.input, className ? className : 'bg-border')}
        placeholder={placeholder}
        {...rest}
      />
    )
  }
)

SimpleField.displayName = 'simple-field'

export default SimpleField
