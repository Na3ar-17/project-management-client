import { NextPage } from 'next'
import styles from './Profile.module.scss'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import FallingStars from '@/components/ui/profile-backgrounds/FallingStars/FallingStars'
import ProfileContent from './ProfileContent/ProfileContent'
const Profile: NextPage = () => {
  return (
    <main className={styles.container}>
      {/* <div className={styles.header}>
        <div className={styles.card}>
          <div className={styles['bg-image']}>
            <FallingStars container="min-h-[240px] rounded-lg" />
          </div>
          <div className={styles.user}>
            <AvatarComponent size={100} avatarStyles="w-fit" />
            <p className={styles.fullName}>Nazar Gavrylyk</p>
          </div>
        </div>
      </div> */}
      <ProfileContent />
    </main>
  )
}

export default Profile
