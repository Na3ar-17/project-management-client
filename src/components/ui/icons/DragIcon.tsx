import { cn } from '@/lib/utils'
import { DraggableProvided } from '@hello-pangea/dnd'
import { GripVertical } from 'lucide-react'
import { NextPage } from 'next'

interface IProps {
  isDragging?: boolean
}

const DragIcon: NextPage<IProps> = ({ isDragging }) => {
  return (
    <GripVertical
      className={cn(
        'cursor-grab size-5 text-menu-text  transition-all',
        isDragging && 'scale-95'
      )}
    />
  )
}

export default DragIcon
