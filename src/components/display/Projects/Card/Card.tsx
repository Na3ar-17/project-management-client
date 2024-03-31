import { NextPage } from 'next'
import styles from './Card.module.scss'
import { ImageIcon } from 'lucide-react'
import { IProjectCard } from '@/types/project.types'
import Image from 'next/image'
import ContextMenuComponent from '@/components/ui/context-menu/ContextMenuComponent'
import Link from 'next/link'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'

const Card: NextPage<IProjectCard> = ({
  end,
  id,
  name,
  start,
  image,
  slug,
}) => {
  return (
    <ContextMenuComponent id={id}>
      <Link href={`${DASHBOARD_PAGES.PROJECTS}/${slug}/dashboard`}>
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
              <ImageIcon strokeWidth={1.5} className={styles.icon} />
            </div>
          )}
          <div className={styles.content}>
            <p className={styles.name}>{name}</p>
            <p className={styles.time}>
              {start} - {end}
            </p>
          </div>
        </div>
      </Link>
    </ContextMenuComponent>
  )
}

export default Card
