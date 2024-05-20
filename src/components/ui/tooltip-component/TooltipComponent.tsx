'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { NextPage } from 'next'
import styles from './TooltipComponent.module.scss'

interface IProps {
  children: React.ReactNode
  text: string
}

const TooltipComponent: NextPage<IProps> = ({ children, text }) => {
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={styles.content}>
          <p className={styles.text}>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipComponent
