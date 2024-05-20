'use client'
import { useTask } from '@/api/hooks/tasks/useTask'
import ButtonCreate from '@/components/ui/buttons/button-create/ButtonCreate'
import { generateViewTypesData } from '@/data/tasks.data'
import { TypeViewType } from '@/types/tasks.types'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import styles from './Panel.module.scss'
import ViewType from './view-type/ViewType'
interface IProps {
  projectId: string
  type: TypeViewType
  setType: Dispatch<SetStateAction<TypeViewType>>
}

const Panel: NextPage<IProps> = ({ projectId, type, setType }) => {
  const { useCreateTask } = useTask()
  const { createTaskMutation } = useCreateTask()
  const t = useTranslations('Projects.Tasks')
  const { viewTypesData } = generateViewTypesData({
    t1: t('views.board'),
    t2: t('views.list'),
  })

  return (
    <div className={styles.panel}>
      <div className={styles.views}>
        {viewTypesData.map((el, index) => (
          <ViewType
            key={index}
            onChange={() => setType(el.value)}
            type={type}
            data={el}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <ButtonCreate
          text={t('button')}
          onClick={() => createTaskMutation(projectId)}
        />
      </div>
    </div>
  )
}

export default Panel
