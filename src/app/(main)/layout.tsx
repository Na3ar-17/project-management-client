'use client'
import NavBar from '@/components/common/navbar/NavBar'
import styles from './layout.module.scss'
import SideBar from '@/components/common/sidebar/SideBar'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { TypeIsHidden } from '@/types/sideBar.type'
import Loader from '@/components/ui/loader/Loader'

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

  return (
    <main
      className={styles.layout}
      style={{
        gridTemplateColumns: `${isHidden === 'true' ? '70px' : '190px'} 1fr`,
      }}
    >
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.sidebar}>
        <SideBar isHidden={isHidden} setIsHidden={setIsHidden} />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  )
}
