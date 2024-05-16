import { NextPage } from 'next'
import styles from './TextAreaComponent.module.scss'
import { Textarea } from '../../shadcn/ui/textarea'
interface IProps {
  onTextAreaChange?: () => void
  value: string
  disabled?: boolean
  placeholder?: string
}

const TextAreaComponent: NextPage<IProps> = ({
  value,
  onTextAreaChange,
  disabled = false,
  placeholder,
}) => {
  return (
    <Textarea
      disabled={disabled}
      spellCheck="false"
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onTextAreaChange}
    />
  )
}

export default TextAreaComponent
