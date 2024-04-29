import { forwardRef } from 'react'
import cn from 'clsx'
interface IProps {
  className?: string
  placeholder?: string
  value?: string
  onChange: () => void
}

const TransparentField = forwardRef<HTMLInputElement, IProps>(
  ({ className, placeholder, value, onChange, ...rest }, ref) => {
    return (
      <label>
        <input
          onChange={onChange}
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
