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
import { generateLanguagesData } from '@/data/settings.data'
import { useState, useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'
interface IProps {}

const LanguageSelect: NextPage<IProps> = ({}) => {
  const { languagesData } = generateLanguagesData()
  const [lang, setLang] = useState<string>('English')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const onChange = (value: string) => {
    const newUrl = pathname.replace(/^\/(\w{2})\/(.*)$/, `/${value}/$2`)
    console.log(newUrl)

    startTransition(() => {
      router.replace(`${newUrl}`)
    })
  }

  return (
    <Select
      disabled={isPending}
      onValueChange={onChange}
      onOpenChange={() => setIsOpen(!isOpen)}
    >
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
              key={index}
            >
              <p className="text-base">{el.label}</p>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelect
