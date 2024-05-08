import { NextPage } from 'next'
import styles from './Table.module.scss'
import { IMembers } from '@/types/members.type'
import Columns from './Columns/Columns'
import { tableColumnsData } from '@/data/members.data'
import { useProjectOwner } from '@/api/hooks/project/useProjectOwner'
import Row from './Row/Row'

interface IProps {
  data: IMembers[]
  projectId: string
}

const Table: NextPage<IProps> = ({ data, projectId }) => {
  const { isOwner, currentUserId } = useProjectOwner({ projectId })
  return (
    <main className={styles.table}>
      <Columns isOwner={isOwner} columnsData={tableColumnsData} />
      {data.map((el, index) => (
        <Row
          currentUserId={currentUserId || ''}
          data={el}
          isOwner={isOwner}
          key={index}
          projectId={projectId}
        />
      ))}
    </main>
  )
}

export default Table
