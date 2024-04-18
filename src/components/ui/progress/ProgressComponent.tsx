'use client'
import { Progress } from '@/components/ui/shadcn/ui/progress'
import { NextPage } from 'next'
import styles from './ProgressComponent.module.scss'
import { useEffect, useState } from 'react'

const ProgressComponent: NextPage = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(12), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Progress
        value={progress}
        className={styles.progress}
        indicator={styles.indicator}
      />
      <p className="text-sm text-menu-text">On Progress</p>
    </div>
  )
}

export default ProgressComponent
