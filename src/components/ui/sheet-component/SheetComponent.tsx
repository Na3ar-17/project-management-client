'use client'
import { NextPage } from 'next'
import { Sheet } from '../shadcn/ui/sheet'
import { useSheet } from '@/zustand/useSheet'
import Content from './Content/Content'

import { ITaskCard } from '@/types/tasks.types'
import { Dispatch, SetStateAction } from 'react'
interface IProps {
  taskData: ITaskCard
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}

const SheetComponent: NextPage<IProps> = ({ taskData, setTasksState }) => {
  const { isOpen, onClose, expectedTaskId } = useSheet()

  return (
    <Sheet open={isOpen} onOpenChange={onClose} key={expectedTaskId}>
      <Content
        data={taskData}
        setTasksState={setTasksState}
        expectedTaskId={expectedTaskId}
      />
    </Sheet>
  )
}

export default SheetComponent
