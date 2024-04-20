'use client'
import { NextPage } from 'next'
import styles from './TabsComponent.module.scss'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../shadcn/ui/tabs'
import { useState } from 'react'
import cn from 'clsx'
import TextAreaComponent from '../fields/text-area-component/TextAreaComponent'
import Comments from './Comments/Comments'

interface IProps {}

const TabsComponent: NextPage<IProps> = ({}) => {
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
      </TabsList>
      <TabsContent value="Description">
        <TextAreaComponent />
      </TabsContent>
      <TabsContent value="Comments">
        <Comments />
      </TabsContent>
    </Tabs>
  )
}

export default TabsComponent
