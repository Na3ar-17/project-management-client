import { AtSign } from 'lucide-react'
import { forwardRef } from 'react'

interface IProps {
  type?: string
  placeholder: string
  extra?: string
  state?: 'error' | 'success'
  style?: string
  iconStyles?: string
  Icon?: React.ElementType
}

const AuthField = forwardRef<HTMLInputElement, IProps>(
  ({ type, placeholder, extra, state, style, iconStyles, Icon }) => {
    return (
      <label className={`relative ${extra}`}>
        {Icon && (
          <Icon
            size={18}
            className={`absolute text-text2 top-[50%] right-[5px] translate-x-[-50%] translate-y-[-50%] ${iconStyles}`}
          />
        )}
        <input
          className={`${'border-border rounded-md border-solid py-[7px] w-[300px] pl-3 pr-9 text-left'} ${style}`}
          type={type}
          placeholder={placeholder}
        />
      </label>
    )
  }
)
export default AuthField
