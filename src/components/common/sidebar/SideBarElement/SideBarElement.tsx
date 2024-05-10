'use client'
import { NextPage } from 'next'
import styles from './SideBarElement.module.scss'
import { ISideBarElement } from '@/types/sidebar-element.type'
import { TypeIsHidden } from '@/types/sideBar.type'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { textAbstract } from '@/utils/textAbstract'
import { useGetProjects } from '@/api/hooks/project/useGetProjects'
import cn from 'clsx'
import { generateProjectPagesData } from '@/data/sidebar-element.data'
import SideBarElementSkeleton from '@/components/ui/skeletons/SideBarSkeleton/SideBarElementSkeleton'
import { IProjectResponse } from '@/types/project.types'

interface IProps {
  isHidden?: TypeIsHidden
  isActive?: boolean
  setIsActive?: () => void
  isFetching: boolean
  projects: IProjectResponse[]
  isSuccess: boolean
}

const SideBarElement: NextPage<ISideBarElement & IProps> = ({
  Icon,
  href,
  text,
  isHidden,
  childrens,
  isFetching,
  projects,
  isSuccess,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (!isSuccess || !projects) {
    return <div>Error</div>
  }
  return text === 'Projects' ? (
    <div className={cn(styles.element, isOpen ? styles.open : '')}>
      <div className={styles.title}>
        <span>
          <Link href={href || ''}>
            {Icon && <Icon className={styles.icon} />}
            {textAbstract(text, 10)}
          </Link>
        </span>
        {projects.length > 0 && (
          <ChevronDown
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              styles.toggle,
              isHidden === 'true' ? styles['toogle-hidden'] : ''
            )}
          />
        )}
      </div>
      <div className={styles.content}>
        {projects?.map((el, index) => (
          <SideBarElement
            key={index}
            text={el.name}
            childrens={generateProjectPagesData({
              slug: el.slug || '',
              id: el.id,
            })}
            isFetching={isFetching}
            isSuccess={isSuccess}
            projects={projects || []}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={cn(styles.element, isOpen ? styles.open : '')}>
      <div className={styles.title}>
        <span>
          <Link href={href || ''}>
            {Icon && <Icon className={styles.icon} />}
            {textAbstract(text, 10)}
          </Link>
        </span>
        {childrens && (
          <ChevronDown
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              styles.toggle,
              isHidden === 'true' ? styles['toogle-hidden'] : ''
            )}
          />
        )}
      </div>
      {childrens && (
        <div className={styles.content}>
          {childrens.map((child, index) => (
            <SideBarElement
              Icon={child.Icon}
              href={child.href}
              text={child.text}
              key={index}
              childrens={child.childrens}
              isFetching={isFetching}
              isSuccess={isSuccess}
              projects={projects || []}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SideBarElement
