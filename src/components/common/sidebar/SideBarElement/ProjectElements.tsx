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
import { LayoutDashboard, ListTodo } from 'lucide-react' // Assuming these icons are imported like this
import { useTranslations } from 'next-intl'
import { useDashboard } from '@/hooks/useDashboard' // Assuming this hook is for fetching dashboard pages

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
  const t = useTranslations('Sidebar')
  const { DASHBOARD_PAGES } = useDashboard()

  const generateProjectPagesData = (slug: string, id: string) => {
    return [
      {
        text: `${t('project.dashboard')}`,
        href: `${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/dashboard`,
        Icon: LayoutDashboard,
      },
      {
        text: `${t('project.tasks')}`,
        Icon: ListTodo,
        href: `${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/tasks`,
      },
    ]
  }

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
            childrens={generateProjectPagesData(el.slug || '', el.id)}
            isFetching={isFetching}
            isSuccess={isSuccess}
            projects={projects || []}
            isProjectChildren={true}
            href={href}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectElements
