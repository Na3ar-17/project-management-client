'use client'
import { NextPage } from 'next'
import styles from './Projects.module.scss'
import Heading from '@/components/ui/heading/Heading'
import Card from './Card/Card'
import { useGetProjects } from '@/api/hooks/project/useGetProjects'
import { useCreateProject } from '@/api/hooks/project/useCreateProject'
import ButtonCreate from '@/components/ui/buttons/button-create/ButtonCreate'
import ProjectSkeleton from '@/components/ui/skeletons/ProjectSkeleton/ProjectSkeleton'
import Image from 'next/image'
import Spinner from '@/components/ui/loaders/spinner/Spinner'
import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'
import { useTranslations } from 'next-intl'

const Projects: NextPage = () => {
  const { projects, isFetching, isSuccess } = useGetProjects()
  const { createProjectMutation } = useCreateProject()
  const t = useTranslations('Projects')

  //TODO create loader

  if (isFetching) {
    return <ProjectSkeleton />
  }

  if (!isSuccess || !projects) {
    return <div>Error</div>
  }

  return (
    <main>
      <Heading text={t('heading')} />
      <div className="flex justify-end">
        <ButtonCreate
          onClick={createProjectMutation}
          text={t('button')}
          className="mt-3"
        />
      </div>

      {projects.length > 0 ? (
        <div className={styles.container}>
          {projects.map((card) => (
            <Card data={card} key={card.id} />
          ))}
        </div>
      ) : (
        <EmptyMessage Loader={Spinner} title={t('empty-message')} />
      )}
    </main>
  )
}

export default Projects
