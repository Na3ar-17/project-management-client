'use client'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'
import { Maximize2, Minimize } from 'lucide-react'
import Loader from '@/components/ui/loader/Loader'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { TypeIsHidden } from '@/types/sideBar.type'
import { sideBarElementData } from '@/data/sidebar-element.data'
import SideBarElement from './SideBarElement/SideBarElement'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { projectCardData, projectsNameAndSlug } from '@/data/project.data'
interface IProps {
  setIsHidden: Dispatch<SetStateAction<TypeIsHidden>>
  isHidden: TypeIsHidden
}

const SideBar: NextPage<IProps> = ({ setIsHidden, isHidden }) => {
  const [sideBarElText, setSideBarElText, isLoading] = useLocalStorage<string>({
    defaultValue: 'home',
    key: 'sideBarTest',
  })

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
          {/* <p className={styles.title}>Menu</p> */}
        </div>
        <ul className={styles.items}>
          {sideBarElementData.map((item, index) => (
            <SideBarElement
              Icon={item.Icon}
              href={item.href}
              text={item.text}
              key={index}
              isHidden={isHidden}
              isActive={item.text === sideBarElText}
              setIsActive={() => setSideBarElText(item.text)}
              subMenuElements={projectsNameAndSlug}
            />
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
