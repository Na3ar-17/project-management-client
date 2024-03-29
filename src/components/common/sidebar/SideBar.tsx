'use client'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'
import { ChevronDown } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { TypeIsHidden } from '@/types/sideBar.type'
import { sideBarElementData } from '@/data/sidebar-element.data'
import SideBarElement from './SideBarElement/SideBarElement'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { projectsNameAndSlug } from '@/data/project.data'
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
      className={`${styles.sidebar} ${
        isHidden === 'true' ? styles.hidden : ''
      }`}
    >
      <div className={styles.body}>
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
              childrens={item.childrens}
            />
          ))}
        </ul>
      </div>
      <div
        className={styles['toggle-box']}
        style={{
          left: `${isHidden === 'true' ? '107%' : '206px'}`,
        }}
      >
        <ChevronDown
          onClick={() => setIsHidden(isHidden == 'false' ? 'true' : 'false')}
          style={{
            transform: `rotate(${isHidden === 'true' ? '270deg' : '90deg'})`,
          }}
          className={styles.toggle}
        />
      </div>
    </aside>
  )
}

export default SideBar
