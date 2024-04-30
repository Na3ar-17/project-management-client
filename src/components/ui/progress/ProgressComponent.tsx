'use client'
import { Progress } from '@/components/ui/shadcn/ui/progress'
import { NextPage } from 'next'
import styles from './ProgressComponent.module.scss'
import { useEffect, useState } from 'react'

const ProgressComponent: NextPage = () => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(0), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Progress value={progress} className={styles.progress} />
      <p className="text-sm text-menu-text">On Progress</p>
    </div>
  )
}

export default ProgressComponent
