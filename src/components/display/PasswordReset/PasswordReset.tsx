'use client'
import { NextPage } from 'next'
import styles from './PasswordReset.module.scss'
import { LockKeyhole, AtSign } from 'lucide-react'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import Link from 'next/link'
import { useDashboard } from '@/hooks/useDashboard'
const PasswordReset: NextPage = () => {
  const { DASHBOARD_PAGES } = useDashboard()
  return (
    <main className={styles.container}>
      <div className={styles.window}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <LockKeyhole className={styles.icon} />
          </div>
          <p className={styles.title}>Reset your password</p>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>
            Type here your email ot reset password
          </p>
          <div className={styles.group}>
            <AuthField placeholder="Enter your email" Icon={AtSign} />
            <Button text="Send Email" type="button" />
          </div>
        </div>
        <div className={styles.footer}>
          <Link
            className="cursor-pointer hover:text-light-blue active:translate-y-[2px]  transition-all"
            href={DASHBOARD_PAGES.AUTH}
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </main>
  )
}

export default PasswordReset
