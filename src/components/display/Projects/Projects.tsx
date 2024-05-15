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
import SimpleLoader from '@/components/ui/loaders/simple-loader/SimpleLoader'
import Spinner from '@/components/ui/loaders/spinner/Spinner'

const Projects: NextPage = () => {
  const { projects, isFetching, isSuccess } = useGetProjects()
  const { createProjectMutation } = useCreateProject()

  //TODO create loader

  if (isFetching) {
    return <ProjectSkeleton />
  }

  if (!isSuccess || !projects) {
    return <div>Error</div>
  }

  return (
    <main>
      <Heading text={'My projects'} />
      <div className="flex justify-end">
        <ButtonCreate
          onClick={createProjectMutation}
          text="Create new Project"
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
        <div className="flex items-center text-center justify-center flex-col gap-5 mt-20">
          <div>
            <p className="text-menu-text text-2xl font-semibold">
              You don't have any projects yet.
            </p>
            <p className="text-text2 text-xl mt-2 font-[500]">
              Start to create one!
            </p>
          </div>
          <Spinner />
        </div>
      )}
    </main>
  )
}

export default Projects
