import { NextPage } from 'next'
import styles from './TextAreaComponent.module.scss'
import { Textarea } from '../../shadcn/ui/textarea'
interface IProps {}

const TextAreaComponent: NextPage<IProps> = ({}) => {
  return (
    <Textarea
      spellCheck="false"
      className={styles.textarea}
      placeholder="Description  here..."
      value={'Develop a modern project management app'}
    />
  )
}

export default TextAreaComponent
