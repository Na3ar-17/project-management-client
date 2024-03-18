import NavBar from '@/components/common/navbar/NavBar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}
