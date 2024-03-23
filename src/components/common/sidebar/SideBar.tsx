'use client'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'
import Link from 'next/link'
import {
  Home,
  Settings,
  Maximize2,
  Minimize,
  LayoutDashboard,
  FolderRoot,
} from 'lucide-react'
import Loader from '@/components/ui/loader/Loader'
import { Dispatch, SetStateAction } from 'react'
import { TypeIsHidden } from '@/types/sideBar.type'

interface IProps {
  setIsHidden: Dispatch<SetStateAction<TypeIsHidden>>
  isHidden: TypeIsHidden
}

const SideBar: NextPage<IProps> = ({ setIsHidden, isHidden }) => {
  const handleOpen = () => {
    setIsHidden('false')
  }

  const handleClose = () => {
    setIsHidden('true')
  }

  return (
    <aside
      className={`${styles.sidebar} ${
        isHidden === 'true' ? styles.hidden : ''
      }`}
    >
      {isHidden === 'true' ? (
        <Maximize2
          onClick={() => handleOpen()}
          className={styles.iconPosition}
        />
      ) : (
        <Minimize
          onClick={() => handleClose()}
          className={styles.iconPosition}
        />
      )}

      <div className={styles.body}>
        <div className={styles.header}>
          <p className={styles.title}>Menu</p>
        </div>
        <ul className={styles.items}>
          <li>
            <Home className={styles.icon} />
            <span>
              <Link href="">Home</Link>
            </span>
          </li>
          <li>
            <LayoutDashboard className={styles.icon} />
            <span>
              <Link href="">Dashboar</Link>
            </span>
          </li>
          <li>
            <FolderRoot className={styles.icon} />
            <span>
              <Link href="">Projects</Link>
            </span>
          </li>

          <li>
            <Settings className={styles.icon} />
            <span>
              <Link href="">Settings</Link>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
