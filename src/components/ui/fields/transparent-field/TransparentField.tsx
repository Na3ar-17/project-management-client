import { forwardRef } from 'react'
import cn from 'clsx'
interface IProps {
  className?: string
  placeholder?: string
  value?: string
  onInputChange?: () => void
  disabled?: boolean
}

const TransparentField = forwardRef<HTMLInputElement, IProps>(
  (
    { className, placeholder, value, onInputChange, disabled, ...rest },
    ref
  ) => {
    return (
      <label>
        <input
          disabled={disabled}
          onChange={onInputChange}
          type="text"
          className={cn('bg-[transparent]', className)}
          ref={ref}
          placeholder={placeholder}
          {...rest}
          value={value}
          autoFocus
          autoComplete="off"
        />
      </label>
    )
  }
)

TransparentField.displayName = 'transparent-field'
export default TransparentField
