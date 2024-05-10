import { NextPage } from 'next'
import { Skeleton } from '@/components/ui/shadcn/ui/skeleton'
import styles from './ProjectSkeleton.module.scss'
interface IProps {}

const ProjectSkeleton: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Skeleton className="w-full h-[50px] bg-border/70 rounded-md" />
        <div className="flex items-center justify-end mt-2">
          <Skeleton className="w-[180px] h-[35px] bg-border/70 rounded-md" />
        </div>
      </div>
      <div className={styles.cards}>
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
      </div>
    </div>
  )
}

export default ProjectSkeleton
