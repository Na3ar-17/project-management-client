import { NextPage } from 'next'
import styles from './Profile.module.scss'
import ProfileContent from './ProfileContent/ProfileContent'
const Profile: NextPage = () => {
  return (
    <main className={styles.container}>
      <ProfileContent />
    </main>
  )
}

export default Profile
