'use client'
import { NextPage } from 'next'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/ui/select'
import styles from './LanguageSelect.module.scss'
import { languagesData } from '@/data/settings.data'
import { useState } from 'react'
interface IProps {}

const LanguageSelect: NextPage<IProps> = ({}) => {
  const [lang, setLang] = useState<string>('English')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Select onOpenChange={() => setIsOpen(!isOpen)}>
      <SelectTrigger className={styles.trigger}>
        <SelectValue placeholder={lang} />
      </SelectTrigger>
      <SelectContent className={styles.content}>
        <SelectGroup className={styles.group}>
          {languagesData.map((el, index) => (
            <SelectItem
              className={styles.item}
              onClick={() => setLang(el.label)}
              value={el.value}
            >
              <p className="text-base">{el.label}</p>
              {isOpen && <p className="text-sm">{el.value}</p>}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelect
