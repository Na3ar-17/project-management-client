'use client'
import { NextPage } from 'next'
import { Sheet } from '../shadcn/ui/sheet'
import { useSheet } from '@/zustand/useSheet'
import { useGetOneTask } from '@/api/hooks/tasks/useGetOneTask'
import Content from './Content/Content'
import { useEffect, useState } from 'react'
import { tasksService } from '@/api/services/tasks.service'

import { ITaskCard } from '@/types/tasks.types'
interface IProps {
  taskId?: string
  taskData: ITaskCard
  projectId?: string
}

const SheetComponent: NextPage<IProps> = ({ projectId, taskData }) => {
  const { isOpen, onClose, taskId } = useSheet()

  return (
    <Sheet open={isOpen} onOpenChange={onClose} key={taskId}>
      <Content data={taskData} taskId={taskId} />
    </Sheet>
  )
}

export default SheetComponent
