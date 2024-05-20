import { generateProjectPagesData } from '@/data/sidebar-element.data'
import { cn } from '@/lib/utils'
import { IProjectResponse } from '@/types/project.types'
import { TypeIsHidden } from '@/types/sideBar.type'
import { textAbstract } from '@/utils/textAbstract'
import { ChevronDown } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import SideBarElement from './SideBarElement'
import styles from './SideBarElement.module.scss'

interface IProps {
  isOpen: boolean
  projects: IProjectResponse[]
  href: string
  text: string
  isHidden?: TypeIsHidden
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isFetching: boolean
  isSuccess: boolean
  Icon: React.ElementType | undefined
}

const ProjectElements: NextPage<IProps> = ({
  isOpen,
  href,
  text,
  projects,
  setIsOpen,
  isHidden,
  isFetching,
  isSuccess,
  Icon,
}) => {
  return (
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
              isHidden === 'true' && styles['toogle-hidden']
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
            isProjectChildren={true}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectElements
