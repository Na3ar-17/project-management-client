'use client'
import NavBar from '@/components/common/navbar/NavBar'
import styles from './layout.module.scss'
import SideBar from '@/components/common/sidebar/SideBar'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { TypeIsHidden } from '@/types/sideBar.type'
import Loader from '@/components/ui/loader/Loader'
import { ChevronDown } from 'lucide-react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isHidden, setIsHidden, isLoading] = useLocalStorage<TypeIsHidden>({
    defaultValue: 'false',
    key: 'isHidden',
  })

  if (isLoading) return <Loader isFill={true} />

  const handleShowToggler = (e: any) => {
    console.log(e)
  }

  return (
    <main
      className={styles.layout}
      style={{
        gridTemplateColumns: `${isHidden === 'true' ? '0px' : '190px'} 1fr`,
      }}
    >
      <div className={styles.navbar}>
        <NavBar isHidden={isHidden} />
      </div>
      <div className={styles.sidebar}>
        <SideBar isHidden={isHidden} setIsHidden={setIsHidden} />
      </div>

      <div className={styles.content}>{children}</div>
      <div
        className={styles['toggle-box']}
        style={{
          left: `${isHidden === 'true' ? '12px' : '206px'}`,
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
    </main>
  )
}
