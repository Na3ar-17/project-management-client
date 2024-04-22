import { NextPage } from 'next'
import styles from './SimpleSwitch.module.scss'
import cn from 'clsx'
import { Switch } from '../../shadcn/ui/switch'

interface IProps {
  className?: string
}

const SimpleSwitch: NextPage<IProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Switch id="airplane-mode" />
    </div>
  )
}

export default SimpleSwitch
