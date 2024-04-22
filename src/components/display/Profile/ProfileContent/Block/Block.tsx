import { NextPage } from 'next'
import styles from './Block.module.scss'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import SimpleSwitch from '@/components/ui/switchers/simple-switch/SimpleSwitch'
import { ISettingsContentData } from '@/types/settings.types'
interface IProps {
  data: ISettingsContentData
}

const Block: NextPage<IProps> = ({ data }) => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>Account security</p>
      <Separator className="mb-2" />
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.group}>
            <span className={styles.subTitle}>Email</span>
            <p className={styles.text}>gavruluknazar0210@gmail.com</p>
          </div>
          <div className={styles.action}>
            <button className={styles.btn}>Change email</button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.group}>
            <span className={styles.subTitle}>2-step verification</span>
            <p className={styles.text}>
              Add an additional layer of security to your account during login.
            </p>
          </div>
          <div className={styles.action}>
            <SimpleSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block
