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
        {projectCardData.map((card) => (
          <Card
            end={card.end}
            id={card.id}
            start={card.start}
            name={card.name}
            image={card.image}
            slug={card.slug}
            key={card.id}
          />
        ))}
        <AddCard />
      </div>
    </main>
  )
}

export default Projects
