'use client'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'
import { Dispatch, SetStateAction } from 'react'
import { TypeIsHidden } from '@/types/sideBar.type'
import { gererateSideBarElementData } from '@/data/sidebar-element.data'
import SideBarElement from './SideBarElement/SideBarElement'
import cn from 'clsx'
import SideBarSkeleton from '@/components/ui/skeletons/SideBarSkeleton/SideBarSkeleton'
import { useGetProjects } from '@/api/hooks/project/useGetProjects'

interface IProps {
  isHidden: TypeIsHidden
  isLoading: boolean
}

const SideBar: NextPage<IProps> = ({ isHidden, isLoading }) => {
  const { projects, isFetching, isSuccess } = useGetProjects()
  const { sideBarElementData } = gererateSideBarElementData()

  if (isLoading || isFetching) {
    return <SideBarSkeleton />
  }
  return (
    <aside className={cn(styles.aside, isHidden === 'true' && styles.hidden)}>
      <div className={styles.body}>
        <div className={styles.items}>
          {sideBarElementData.map((item, index) => (
            <SideBarElement
              Icon={item.Icon}
              href={item.href}
              text={item.text}
              key={index}
              isHidden={isHidden}
              childrens={item.childrens}
              isFetching={isFetching}
              isSuccess={isSuccess}
              projects={projects || []}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default SideBar
