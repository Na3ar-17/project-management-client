import styles from './layout.module.scss'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={styles.main}>
      <div className={styles.gradient}></div>
      <div className={styles.container}></div>
      {children}
    </main>
  )
}
