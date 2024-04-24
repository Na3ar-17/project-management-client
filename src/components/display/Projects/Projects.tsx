import { NextPage } from 'next'
import styles from './Projects.module.scss'
import Heading from '@/components/ui/heading/Heading'
import { projectCardData } from '@/data/project.data'
import Card from './Card/Card'
import AddCard from './AddCard/AddCard'

const Projects: NextPage = () => {
  return (
    <main>
      <Heading text="My Projects" />
      <div className={styles.container}>
        <AddCard />
        {projectCardData.map((card) => (
          <Card
            id={card.id}
            date={card.date}
            name={card.name}
            image={card.image}
            slug={card.slug}
            key={card.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Projects
