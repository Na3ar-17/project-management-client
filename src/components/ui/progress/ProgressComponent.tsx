'use client'
import { Progress } from '@/components/ui/shadcn/ui/progress'
import { NextPage } from 'next'
import styles from './ProgressComponent.module.scss'
import { useEffect, useState } from 'react'
interface IProps {
  progressNumber: number
}

const ProgressComponent: NextPage<IProps> = ({ progressNumber }) => {
  return (
    <div>
      <Progress
        value={Math.floor(progressNumber)}
        className={styles.progress}
      />
      <p className="text-sm text-menu-text">On Progress</p>
    </div>
  )
}

export default ProgressComponent
