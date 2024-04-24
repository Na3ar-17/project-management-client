import { NextPage } from 'next'
import styles from './Settings.module.scss'
import SettingsContent from './SettingsContent/SettingsContent'
const Settings: NextPage = () => {
  return (
    <main className={styles.container}>
      <SettingsContent />
    </main>
  )
}

export default Settings
