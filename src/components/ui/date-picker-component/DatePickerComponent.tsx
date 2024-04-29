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

dayjs.extend(LocalizedFormat)

interface IDatePicker {
  onChange: (value: string) => void
  end: string
  position?: 'left' | 'right'
  start: string
}

const DatePickerComponent: NextPage<IDatePicker> = ({
  onChange,
  end,
  position = 'right',
  start,
}) => {
  const [selected, setSelected] = useState<Date>()
  const { isShow, setIsShow, ref } = useOutside(false)

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
      <button onClick={() => setIsShow(!isShow)}>
        <DateBadge
          date={start}
          deadLine={end === '00.00.00' ? '' : dayjs(end).format('DD.MM.YYYY')}
        />
      </button>

      {isShow && (
        <div className={'absolute  p-2.5  bg-border z-10 shadow rounded-lg'}>
          <DayPicker
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
