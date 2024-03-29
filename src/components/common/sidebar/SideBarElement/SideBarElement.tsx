'use client'
import { NextPage } from 'next'
import styles from './SideBarElement.module.scss'
import { ISideBarElement } from '@/types/sidebar-element.type'
import { TypeIsHidden } from '@/types/sideBar.type'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface IProps {
  isHidden?: TypeIsHidden
  isActive?: boolean
  setIsActive?: () => void
}

const SideBarElement: NextPage<ISideBarElement & IProps> = ({
  Icon,
  href,
  text,
  isHidden,
  isActive,
  setIsActive,
  childrens,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(childrens)

  return childrens ? (
    <li className={`${styles.element} ${isOpen ? styles.open : ''}`}>
      <div className={styles.title}>
        <span>
          <Link href={href}>
            {Icon && <Icon className={styles.icon} />}
            {text}
          </Link>
        </span>
        <ChevronDown
          onClick={() => setIsOpen(!isOpen)}
          className={styles.toggle}
        />
      </div>
      <div className={styles.content}>
        {childrens.map((child, index) => (
          <SideBarElement
            Icon={child.Icon}
            href={child.href}
            text={child.text}
            key={index}
            childrens={child.childrens}
          />
        ))}
      </div>
    </li>
  ) : (
    <li className={`${styles.element} ${isOpen ? styles.open : ''}`}>
      <div className={styles.title}>
        <span>
          <Link href={href}>
            {Icon && <Icon className={styles.icon} />}
            {text}
          </Link>
        </span>
      </div>
    </li>
  )
}

export default SideBarElement
