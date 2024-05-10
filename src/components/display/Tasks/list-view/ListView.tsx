import { NextPage } from 'next'
import styles from './ListView.module.scss'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { IViewTypesPros } from '@/types/tasks.types'

const ListView: NextPage<IViewTypesPros> = ({ onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div></div>
    </DragDropContext>
  )
}

export default ListView
