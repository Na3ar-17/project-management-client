import { NextPage } from 'next'
import styles from '../KanBanCard.module.scss'
import { useSheet } from '@/zustand/useSheet'
import cn from 'clsx'
import type { DraggableProvided } from '@hello-pangea/dnd'
import { GripVertical, Trash2 } from 'lucide-react'

interface IProps {
  title: string
  id: string
  provided: DraggableProvided
  isDragging: boolean
  onTaskDelete: () => void
  isOwner: boolean
}

const Header: NextPage<IProps> = ({
  title,
  id,
  isDragging,
  provided,
  onTaskDelete,
  isOwner,
}) => {
  const { onOpen, setExpectedTaskId } = useSheet()

  return (
    <div className={styles.header}>
      <p
        className={styles.title}
        onClick={() => {
          setExpectedTaskId(id)
          onOpen()
        }}
      >
        {title}
      </p>

      <div
        className={cn(
          !isDragging && styles.actions,
          isDragging && 'opacity-100 visible'
        )}
      >
        {isOwner && (
          <div
            className="flex items-center gap-3"
            {...provided.dragHandleProps}
          >
            <Trash2
              className={cn(
                styles.icon,
                styles.delete,
                isDragging && 'size-5 text-light-red'
              )}
              onClick={onTaskDelete}
            />
            <GripVertical
              className={cn(styles.icon, styles.drag, isDragging && 'size-5')}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
