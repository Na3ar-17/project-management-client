import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/shadcn/ui/select'
import { useGenerateLanguagesData } from '@/data/settings.data'
import useCookie from '@/hooks/useCookie'
import { NextPage } from 'next'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import styles from './LanguageSelect.module.scss'

interface Language {
  label: string
  value: string
}

interface LanguageSelectProps {}

const LanguageSelect: NextPage<LanguageSelectProps> = ({}) => {
  const { languagesData } = useGenerateLanguagesData()
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
