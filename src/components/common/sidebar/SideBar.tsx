'use client'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'
import { Dispatch, SetStateAction } from 'react'
import { TypeIsHidden } from '@/types/sideBar.type'
import { sideBarElementData } from '@/data/sidebar-element.data'
import SideBarElement from './SideBarElement/SideBarElement'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import cn from 'clsx'
interface IProps {
  setIsHidden: Dispatch<SetStateAction<TypeIsHidden>>
  isHidden: TypeIsHidden
}

const SideBar: NextPage<IProps> = ({ setIsHidden, isHidden }) => {
  const [sideBarElText, setSideBarElText, isLoading] = useLocalStorage<string>({
    defaultValue: 'home',
    key: 'sideBarTest',
  })

  return (
    <aside
      className={cn(styles.sidebar, isHidden === 'true' ? styles.hidden : '')}
    >
      <div className={styles.body}>
        <div className={styles.items}>
          {sideBarElementData.map((item, index) => (
            <SideBarElement
              Icon={item.Icon}
              href={item.href}
              text={item.text}
              key={index}
              isHidden={isHidden}
              isActive={item.text === sideBarElText}
              setIsActive={() => setSideBarElText(item.text)}
              childrens={item.childrens}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default SideBar
