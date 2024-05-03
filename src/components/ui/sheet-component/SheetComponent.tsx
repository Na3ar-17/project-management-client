'use client'
import { NextPage } from 'next'
import { Sheet } from '../shadcn/ui/sheet'
import { useSheet } from '@/zustand/useSheet'
import Content from './Content/Content'

import { ITaskCard } from '@/types/tasks.types'
interface IProps {
  taskData: ITaskCard
}

const SheetComponent: NextPage<IProps> = ({ taskData }) => {
  const { isOpen, onClose, expectedTaskId } = useSheet()

  return (
    <Sheet open={isOpen} onOpenChange={onClose} key={expectedTaskId}>
      <Content data={taskData} expectedTaskId={expectedTaskId} />
    </Sheet>
  )
}

export default SheetComponent
