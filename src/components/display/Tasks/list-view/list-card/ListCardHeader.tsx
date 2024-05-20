import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import DragIcon from '@/components/ui/icons/DragIcon'
import { TypeUpdateTaskCard } from '@/types/tasks.types'
import { useSheet } from '@/zustand/useSheet'
import { DraggableProvided } from '@hello-pangea/dnd'
import { SquareArrowOutUpRight } from 'lucide-react'
import { NextPage } from 'next'
import { Control, Controller } from 'react-hook-form'
import styles from './ListCard.module.scss'
interface IProps {
  props: {
    provided: DraggableProvided
    isDragging: boolean
    control: Control<TypeUpdateTaskCard, any>
    id: string
    isCompleted: boolean
  }
}

const ListCardHeader: NextPage<IProps> = ({ props }) => {
  const { provided, isDragging, control, id, isCompleted } = props
  const { onOpen, setExpectedTaskId } = useSheet()

  return (
    <div className={styles.elemenet}>
      <div className={styles.actions}>
        <div {...provided.dragHandleProps}>
          <DragIcon isDragging={isDragging} />
        </div>
        <Controller
          control={control}
          name="isCompleted"
          render={({ field: { value, onChange } }) => (
            <CheckBox checked={value} onCheckedChange={onChange} />
          )}
        />
        <SquareArrowOutUpRight
          onClick={() => {
            setExpectedTaskId(id)
            onOpen()
          }}
          className={styles.icon}
        />
      </div>
      <Controller
        control={control}
        name="title"
        render={({ field: { value, onChange } }) => (
          <TransparentField
            className={styles.title}
            value={value}
            onInputChange={onChange}
            lableStyle="w-[100%]"
            disabled={isCompleted}
          />
        )}
      />
    </div>
  )
}

export default ListCardHeader
