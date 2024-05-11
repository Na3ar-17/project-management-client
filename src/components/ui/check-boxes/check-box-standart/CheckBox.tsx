'use client'
import { NextPage } from 'next'
import './CheckBox.scss'

interface IProps {
  onCheckedChange?: (value: any) => void
  checked: boolean | undefined
}

const CheckBox: NextPage<IProps> = ({ onCheckedChange, checked }) => {
  return (
    <label className="flex justify-center items-center">
      <input
        checked={checked}
        onChange={onCheckedChange}
        type="checkbox"
        className="ui-checkbox"
      />
    </label>
  )
}

export default CheckBox
