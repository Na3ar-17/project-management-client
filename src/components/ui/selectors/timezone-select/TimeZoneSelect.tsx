'use client'
import { NextPage } from 'next'
import styles from './TimeZoneSelect.module.scss'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/ui/select'
import { timeZoneData } from '@/data/settings.data'
import { useState } from 'react'

interface IProps {}

const TimeZoneSelect: NextPage<IProps> = ({}) => {
  const [time, setTime] = useState('(GMT+02:00) Europe/Warsaw (GMT+2)')
  return (
    <Select>
      <SelectTrigger className={styles.trigger}>
        <SelectValue placeholder={time} />
      </SelectTrigger>
      <SelectContent className={styles.content}>
        <SelectGroup className={styles.group}>
          {timeZoneData.map((el, index) => (
            <SelectItem
              className={styles.item}
              onClick={() => setTime(el.value)}
              value={`GMT+2 ${index}`}
            >
              {el.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default TimeZoneSelect
