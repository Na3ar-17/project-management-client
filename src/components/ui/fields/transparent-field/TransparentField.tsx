import { type CSSProperties, forwardRef } from 'react'
import cn from 'clsx'
interface IProps {
  className?: string
  placeholder?: string
  value?: string
  onInputChange?: () => void
  disabled?: boolean
  style?: CSSProperties
  lableStyle?: string
}

const TransparentField = forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      placeholder,
      lableStyle,
      value,
      onInputChange,
      style,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <label className={lableStyle}>
        <input
          style={style}
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
