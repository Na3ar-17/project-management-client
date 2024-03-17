import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={styles.main}>
      {/* <div className={styles.gradient}></div> */}
      {children}
    </main>
  )
}
