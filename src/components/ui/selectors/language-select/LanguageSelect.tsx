import React, { useState } from 'react'
import { NextPage } from 'next'
import { useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/ui/select'
import { generateLanguagesData } from '@/data/settings.data'
import styles from './LanguageSelect.module.scss'
import useCookie from '@/hooks/useCookie'
import Loader from '../../loaders/loader/Loader'

interface Language {
  label: string
  value: string
}

interface LanguageSelectProps {}

const LanguageSelect: NextPage<LanguageSelectProps> = ({}) => {
  const { languagesData } = generateLanguagesData()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [valueFromCookie] = useCookie('NEXT_LOCALE', '')

  const handleLanguageChange = (value: string) => {
    const newUrl = `/${value}${pathname.substring(3)}`
    startTransition(() => {
      router.replace(newUrl)
    })
  }

  return (
    <Select
      disabled={isPending}
      onValueChange={handleLanguageChange}
      onOpenChange={() => setIsOpen(!isOpen)}
    >
      <SelectTrigger className={styles.trigger}>
        <p>{valueFromCookie === 'en' ? 'English' : 'Українська'}</p>
      </SelectTrigger>
      {isOpen && (
        <SelectContent className={styles.content}>
          <SelectGroup className={styles.group}>
            {languagesData.map((language: Language, index: number) => (
              <SelectItem
                className={styles.item}
                onClick={() => handleLanguageChange(language.label)}
                value={language.value}
                key={index}
              >
                <p className="text-base">{language.label}</p>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      )}
    </Select>
  )
}

export default LanguageSelect
