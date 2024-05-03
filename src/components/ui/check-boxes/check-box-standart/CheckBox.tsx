'use client'
import { NextPage } from 'next'
import { ChangeEventHandler, useState } from 'react'
import './CheckBox.scss'

interface IProps {
  onCheckedChange?: (value: any) => void
  checked?: boolean
}

const CheckBox: NextPage<IProps> = ({ onCheckedChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    if (onCheckedChange) {
      onCheckedChange(newValue)
    }
  }

  return (
    <label className="flex justify-center items-center">
      <input
        checked={!!checked}
        onChange={handleCheckboxChange}
        type="checkbox"
        className="ui-checkbox"
      />
    </label>
  )
}

export default CheckBox
