'use client'
import { NextPage } from 'next'
import styles from './TabsComponent.module.scss'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../shadcn/ui/tabs'
import { useState } from 'react'
import cn from 'clsx'
import TextAreaComponent from '../fields/text-area-component/TextAreaComponent'
import Comments from './Comments/Comments'
import { Control, Controller } from 'react-hook-form'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'

interface IProps {
  control: Control<TypeUpdateTaskCard>
  data: ITaskCard
}

const TabsComponent: NextPage<IProps> = ({ control, data }) => {
  const [isActive, setIsActive] = useState<'Description' | 'Comments'>(
    'Description'
  )

  const handleChangeIsActive = (text: 'Description' | 'Comments') => {
    setIsActive(text)
  }

  return (
    <Tabs defaultValue="Description">
      <TabsList className={styles.list}>
        <TabsTrigger
          onClick={() => handleChangeIsActive('Description')}
          className={cn(
            styles.trigger,
            isActive === 'Description' && styles.active
          )}
          value="Description"
        >
          Description
        </TabsTrigger>
        {data.assigneesers?.length > 1 && (
          <TabsTrigger
            onClick={() => handleChangeIsActive('Comments')}
            className={cn(
              styles.trigger,
              isActive === 'Comments' && styles.active
            )}
            value="Comments"
          >
            Comments
            <span className={styles['comments_count']}>3</span>
          </TabsTrigger>
        )}
      </TabsList>
      <TabsContent className="mt-2" value="Description">
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextAreaComponent
              value={value || ''}
              onTextAreaChange={onChange}
            />
          )}
        />
      </TabsContent>
      <TabsContent value="Comments">
        <Comments />
      </TabsContent>
    </Tabs>
  )
}

export default TabsComponent
