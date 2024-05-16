import { NextPage } from 'next'
import styles from '../KanBanCard.module.scss'
import { useSheet } from '@/zustand/useSheet'
import cn from 'clsx'
import type { DraggableProvided } from '@hello-pangea/dnd'
import { GripVertical, Trash2 } from 'lucide-react'
import TooltipComponent from '@/components/ui/tooltip-component/TooltipComponent'
import { textAbstract } from '@/utils/textAbstract'
import { useTransition } from 'react'
import { useTranslations } from 'next-intl'

interface IProps {
  title: string
  id: string
  provided: DraggableProvided
  isDragging: boolean
  onTaskDelete: () => void
}

const Header: NextPage<IProps> = ({
  title,
  id,
  isDragging,
  provided,
  onTaskDelete,
}) => {
  const { onOpen, setExpectedTaskId } = useSheet()
  const t = useTranslations('Projects.Tasks')

  return (
    <div className={styles.header}>
      <p
        className={styles.title}
        onClick={() => {
          setExpectedTaskId(id)
          onOpen()
        }}
      >
        {textAbstract(title, 20)}
      </p>

      <div
        className={cn(
          !isDragging && styles.actions,
          isDragging && 'opacity-100 visible',
          'flex items-center gap-3'
        )}
      >
        <Trash2
          className={cn(
            styles.icon,
            styles.delete,
            isDragging && 'size-5 text-light-red'
          )}
          onClick={onTaskDelete}
        />
        <TooltipComponent text={t('ui.drag')}>
          <div className="" {...provided.dragHandleProps}>
            <GripVertical
              className={cn(
                styles.icon,
                styles.drag,
                'cursor-grab',
                isDragging && 'size-5'
              )}
            />
          </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Header
