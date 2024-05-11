'use client'
import { Progress } from '@/components/ui/shadcn/ui/progress'
import { NextPage } from 'next'
import styles from './ProgressComponent.module.scss'
import { cn } from '@/lib/utils'
interface IProps {
  progressNumber: number
  className?: string
  isSingle?: boolean
}

const ProgressComponent: NextPage<IProps> = ({
  progressNumber,
  className,
  isSingle = false,
}) => {
  return (
    <div className={className}>
      <Progress
        value={Math.floor(progressNumber)}
        className={cn(styles.progress)}
      />
      {!isSingle && <p className="text-sm text-menu-text">On Progress</p>}
    </div>
  )
}

export default ProgressComponent
