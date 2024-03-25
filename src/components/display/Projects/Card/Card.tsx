import { NextPage } from 'next'
import styles from './Card.module.scss'
import { ImageIcon } from 'lucide-react'
import { IProjectCard } from '@/types/projectCard.type'
import Image from 'next/image'

const Card: NextPage<IProjectCard> = ({ end, id, name, start, image }) => {
  return (
    <div className={styles.card}>
      {image ? (
        <div className={styles.image}>
          <Image
            src={image}
            alt={name}
            className={styles.picture}
            width={100}
            height={100}
          />
        </div>
      ) : (
        <div className={styles['no-image']}>
          <ImageIcon className={styles.icon} />
        </div>
      )}
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.time}>
          {start} - {end}
        </p>
      </div>
    </div>
  )
}

export default Card
