'use client'

import { useOutside } from '@/hooks/useOutside'
import { cn } from '@/lib/utils'
import { isMatch } from 'date-fns'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import DateBadge from '../badges/date-badge/DateBadge'
import './DatePicker.scss'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
  onChange: (value: string) => void
  deadLine: string
  position?: 'left' | 'right'
  date?: string
  isSingle?: boolean
  disabled?: boolean
}

const DatePickerComponent: NextPage<IDatePicker> = ({
  onChange,
  deadLine,
  position = 'right',
  date,
  isSingle,
  disabled,
}) => {
  const [selected, setSelected] = useState<Date>()
  const { isShow, setIsShow, ref } = useOutside(false)
  const t = useTranslations('DatePicker')

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    const ISOdate = date?.toISOString()

    setSelected(date)
    if (ISOdate) {
      onChange(ISOdate)
      setIsShow(false)
    } else {
      onChange('')
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => !disabled && setIsShow(!isShow)}>
        {isMatch(deadLine, 'dd.mm.yyyy') ? (
          <DateBadge isSingle deadLine={deadLine} />
        ) : (
          <DateBadge
            date={date}
            isSingle={isSingle}
            deadLine={
              deadLine == '' ? t('1') : dayjs(deadLine).format('DD.MM.YYYY')
            }
          />
        )}
      </button>

      <div
        className={cn(
          'absolute  p-2.5  bg-border transition-all  opacity-0 z-10 shadow rounded-lg',
          isShow && 'opacity-100'
        )}
        style={{
          visibility: isShow ? 'visible' : 'hidden',
        }}
      >
        <DayPicker
          disabled={disabled}
          fromYear={2024}
          toYear={2050}
          initialFocus={isShow}
          mode="single"
          defaultMonth={selected}
          selected={selected}
          onSelect={handleDaySelect}
          weekStartsOn={1}
          formatters={{ formatCaption }}
        />
      </div>
    </div>
  )
}

export default DatePickerComponent
