'use client'
import { IProjectResponse } from '@/types/project.types'
import { TypeIsHidden } from '@/types/sideBar.type'
import { ISideBarElement } from '@/types/sidebar-element.type'
import { textAbstract } from '@/utils/textAbstract'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import ProjectElements from './ProjectElements'
import styles from './SideBarElement.module.scss'

interface IProps {
  isHidden?: TypeIsHidden
  isActive?: boolean
  setIsActive?: () => void
  isFetching: boolean
  projects: IProjectResponse[]
  isSuccess: boolean
  isProjectChildren?: boolean
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
  isProjectChildren,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (!isSuccess || !projects) {
    return <div>Error</div>
  }
  return text === 'Projects' || text === 'Проекти' ? (
    <ProjectElements
      href={href || ''}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isOpen={isOpen}
      projects={projects}
      setIsOpen={setIsOpen}
      text={text}
      isHidden={isHidden}
      Icon={Icon || undefined}
    />
  ) : (
    <div className={cn(styles.element, isOpen ? styles.open : '')}>
      <div className={styles.title}>
        <span>
          <Link href={href || ''}>
            {Icon && <Icon className={styles.icon} />}
            {textAbstract(text, isProjectChildren ? 12 : 15)}
          </Link>
        </span>
        {childrens && (
          <ChevronDown
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              styles.toggle,
              isHidden === 'true' && styles['toogle-hidden']
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
