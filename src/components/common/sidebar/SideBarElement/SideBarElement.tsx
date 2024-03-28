'use client'
import { NextPage } from 'next'
import styles from './SideBarElement.module.scss'
import Link from 'next/link'
import { ISideBarElement } from '@/types/sidebar-element.type'
import { TypeIsHidden } from '@/types/sideBar.type'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { textAbstract } from '../utils'
import { TypeSideBarSubMenuElement } from '@/types/project.types'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'

interface IProps {
  isHidden: TypeIsHidden
  isActive: boolean
  setIsActive: () => void
  subMenuElements: TypeSideBarSubMenuElement[]
}

const SideBarElement: NextPage<ISideBarElement & IProps> = ({
  Icon,
  href,
  text,
  isHidden,
  isActive,
  setIsActive,
  subMenuElements,
}) => {
  const [isSubMenuActive, setIsSubMenuActive] = useState<boolean>(false)

  return (
    <li
      className={`${styles.li}  ${isActive ? styles.active : ''} ${
        isSubMenuActive ? styles.subActive : ''
      }`}
    >
      <div className={`${styles.element}`}>
        <Link onClick={setIsActive} className={styles.link} href={href}>
          <Icon strokeWidth={1.8} className={styles.icon} />
          <span>{text}</span>
        </Link>
        {text === 'Projects' && (
          <ChevronDown
            onClick={() => setIsSubMenuActive(!isSubMenuActive)}
            className={styles.open}
          />
        )}
        {text === 'Projects' && (
          <ul className={styles['sub-menu']}>
            {subMenuElements.map((item, index) => (
              <li className={styles.list} key={index}>
                <Link href={`${DASHBOARD_PAGES.PROJECTS}/${item.slug}`}>
                  <span>{textAbstract(item.name, 14)}</span>
                </Link>
                <ChevronDown className={styles['sub-open']} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default SideBarElement
