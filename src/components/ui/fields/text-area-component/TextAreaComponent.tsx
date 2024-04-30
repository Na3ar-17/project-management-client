import { NextPage } from 'next'
import styles from './TextAreaComponent.module.scss'
import { Textarea } from '../../shadcn/ui/textarea'
interface IProps {
  onTextAreaChange?: () => void
  value: string
}

const TextAreaComponent: NextPage<IProps> = ({ value, onTextAreaChange }) => {
  return (
    <Textarea
      spellCheck="false"
      className={styles.textarea}
      placeholder="Description  here..."
      value={value}
      onChange={onTextAreaChange}
    />
  )
}

export default TextAreaComponent
