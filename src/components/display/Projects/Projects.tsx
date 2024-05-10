'use client'
import { NextPage } from 'next'
import styles from './Projects.module.scss'
import Heading from '@/components/ui/heading/Heading'
import Card from './Card/Card'
import AddCard from './AddCard/AddCard'
import { useGetProjects } from '@/api/hooks/project/useGetProjects'
import { useCreateProject } from '@/api/hooks/project/useCreateProject'
import ButtonCreate from '@/components/ui/buttons/button-create/ButtonCreate'
import Image from 'next/image'
import Cookie from 'js-cookie'
import ProjectSkeleton from '@/components/ui/skeletons/ProjectSkeleton/ProjectSkeleton'

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
      <Heading text="My Projects" />
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
        <div className="w-[50%]"></div>
      )}
    </main>
  )
}

export default Projects
