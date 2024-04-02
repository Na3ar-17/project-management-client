'use client'
import { NextPage } from 'next'
import { ChangeEventHandler, useState } from 'react'
import './CheckBox.scss'

interface IProps {
  onCheckedChange?: (value: any) => void
  checked?: string | boolean
}

const CheckBox: NextPage<IProps> = ({ onCheckedChange, checked }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newValue = !isChecked
    setIsChecked(newValue)
    if (onCheckedChange) {
      onCheckedChange(newValue)
    }
  }

  return (
    <label className="label">
      <input
        checked={isChecked || !!checked}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default CheckBox
