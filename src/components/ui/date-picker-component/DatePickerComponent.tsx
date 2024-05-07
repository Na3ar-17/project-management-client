'use client'

import { NextPage } from 'next'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { formatCaption } from './DatePickerCaption'
import { useState } from 'react'
import { useOutside } from '@/hooks/useOutside'
import { X } from 'lucide-react'
import './DatePicker.scss'
import DateBadge from '../badges/date-badge/DateBadge'
import { isToday, isMatch } from 'date-fns'

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
  console.log()

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
              deadLine == ''
                ? 'Select dead line'
                : dayjs(deadLine).format('DD.MM.YYYY')
            }
          />
        )}
      </button>

      {isShow && (
        <div className={'absolute  p-2.5  bg-border z-10 shadow rounded-lg'}>
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
      )}
    </div>
  )
}

export default DatePickerComponent
