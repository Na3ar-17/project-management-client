'use client'
import { useProject } from '@/api/hooks/project/useProject'
import SideBarSkeleton from '@/components/ui/skeletons/SideBarSkeleton/SideBarSkeleton'
import { useGenerateSideBarElementData } from '@/data/sidebar-element.data'
import { TypeIsHidden } from '@/types/sideBar.type'
import cn from 'clsx'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'
import SideBarElement from './SideBarElement/SideBarElement'

interface IProps {
  isHidden: TypeIsHidden
  isLoading: boolean
}

const SideBar: NextPage<IProps> = ({ isHidden, isLoading }) => {
  const { useGetProjects } = useProject()
  const { projects, isFetching, isSuccess } = useGetProjects()
  const { sideBarElementData } = useGenerateSideBarElementData()

  if (isLoading || isFetching) {
    return <SideBarSkeleton />
  }

  if (!isSuccess || !projects) {
    return <div>Error</div>
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
              projects={projects}
            />
          ))}
        </div>
        <div className="absolute w-[190px] bottom-2 flex justify-start flex-col items-center">
          <p className="text-sm text-text2">
            Created by
            <span className="font-semibold text-[#bfbf07]">
              {' '}
              Havrylyk Nazar
            </span>
          </p>
          <p className="text-[16px] text-menu-text">
            <span className="text-light-blue">ETEON</span> Corporation
          </p>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
