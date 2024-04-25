'use client'
import { NextPage } from 'next'
import styles from './SideBarElement.module.scss'
import { ISideBarElement } from '@/types/sidebar-element.type'
import { TypeIsHidden } from '@/types/sideBar.type'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { textAbstract } from '../utils'

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

  return (
    <div className={`${styles.element} ${isOpen ? styles.open : ''}`}>
      <div className={styles.title}>
        <span>
          <Link href={href}>
            {Icon && <Icon className={styles.icon} />}
            {textAbstract(text, 10)}
          </Link>
        </span>
        {childrens && (
          <ChevronDown
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.toggle} ${
              isHidden === 'true' ? styles['toogle-hidden'] : ''
            }`}
          />
        )}
      </div>
      {childrens && (
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
      )}
    </div>
  )
}

export default SideBarElement
