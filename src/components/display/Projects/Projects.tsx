'use client'
import { NextPage } from 'next'
import styles from './Projects.module.scss'
import Heading from '@/components/ui/heading/Heading'
import Card from './Card/Card'
import AddCard from './AddCard/AddCard'
import { useGetProjects } from '@/api/hooks/project/useGetProjects'
import { useCreateProject } from '@/api/hooks/project/useCreateProject'

const Projects: NextPage = () => {
  const { projects, isFetching, isSuccess } = useGetProjects()
  const { createProjectMutation } = useCreateProject()

  //TODO create loader

  if (isFetching) {
    return <div>Loading</div>
  }

  if (!isSuccess) {
    return <div>Error</div>
  }
  return (
    <main>
      <Heading text="My Projects" />
      <div className={styles.container}>
        <AddCard onClick={createProjectMutation} />
        {projects?.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </main>
  )
}

export default Projects
