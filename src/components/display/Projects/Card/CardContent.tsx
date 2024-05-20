import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { useDashboard } from '@/hooks/useDashboard'
import { IProjectResponse } from '@/types/project.types'
import { useDialog } from '@/zustand/useDialog'
import { ExternalLink, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Control, Controller } from 'react-hook-form'
import styles from './Card.module.scss'
interface IProps {
  props: {
    control: Control<
      Partial<Omit<IProjectResponse, 'createdAt' | 'slug' | 'updatedAt'>>,
      any
    >
    name: string
    createdAt: string
    end: string
    slug: string
    id: string
  }
}

const CardContent: NextPage<IProps> = ({ props }) => {
  const { control, name, createdAt, end, id, slug } = props
  const { DASHBOARD_PAGES } = useDashboard()
  const { setIdToDelete, onOpen } = useDialog()

  return (
    <div className={styles.content}>
      <Controller
        name="name"
        control={control}
        defaultValue={name}
        render={({ field: { onChange, value } }) => {
          return (
            <TransparentField
              className="text-xl w-full"
              value={value}
              onInputChange={onChange}
            />
          )
        }}
      />
      <div className={styles.time}>
        <Controller
          name="end"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePickerComponent
              onChange={onChange}
              deadLine={value ? value : end || ''}
              date={createdAt || ''}
            />
          )}
        />
        <div className={styles.actions}>
          <Link
            className="w-fit"
            href={`${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/dashboard`}
          >
            <ExternalLink className={styles.icon} />
          </Link>
          <Trash2
            onClick={() => {
              setIdToDelete(id)
              onOpen()
            }}
            className={styles.delete}
          />
        </div>
      </div>
    </div>
  )
}

export default CardContent
