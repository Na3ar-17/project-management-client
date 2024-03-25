import { NextPage } from 'next'
import styles from './SideBarElement.module.scss'
import Link from 'next/link'
import { ISideBarElement } from '@/types/sidebar-element.type'
import { TypeIsHidden } from '@/types/sideBar.type'

interface IProps {
  isHidden: TypeIsHidden
  isActive: boolean
  setIsActive: () => void
}

const SideBarElement: NextPage<ISideBarElement & IProps> = ({
  Icon,
  href,
  text,
  isHidden,
  isActive,
  setIsActive,
}) => {
  return (
    <li
      className={`${styles.li} ${isHidden === 'true' ? styles.hidden : ''} ${
        isActive ? styles.active : ''
      }`}
    >
      <Link onClick={setIsActive} className={styles.link} href={href}>
        <Icon className={styles.icon} />
        <span>{text}</span>
        {isHidden === 'true' && <p className={styles.details}>{text}</p>}
      </Link>
    </li>
  )
}

export default SideBarElement
