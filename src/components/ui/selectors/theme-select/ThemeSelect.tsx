import { NextPage } from 'next'
import styles from './ThemeSelect.module.scss'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/ui/select'
interface IProps {}

const ThemeSelect: NextPage<IProps> = ({}) => {
  return <Select></Select>
}

export default ThemeSelect
