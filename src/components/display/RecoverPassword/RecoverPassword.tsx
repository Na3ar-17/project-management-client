'use client'
import { NextPage } from 'next'
import styles from './RecoverPassword.module.scss'
import { LockKeyhole, AtSign } from 'lucide-react'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import Link from 'next/link'
import { useDashboard } from '@/hooks/useDashboard'
import { useForm } from 'react-hook-form'
import { isValidEmail } from '../Auth/utils'
import { useTranslations } from 'next-intl'
import { useUser } from '@/api/hooks/user/useUser'
import { useEffect } from 'react'

const RecoverPassword: NextPage = () => {
  const { DASHBOARD_PAGES } = useDashboard()
  const t = useTranslations('Auth')
  const { useGetByEmail } = useUser()
  const { getByEmailMutation, data: response } = useGetByEmail()
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>({
    mode: 'onChange',
    defaultValues: {
      email: 'gavruluknazar0210@gmail.com',
    },
  })

  useEffect(() => {
    if (response?.success) {
      reset()
    }
  }, [response])

  const onSubmit = (data: { email: string }) => {
    if (!isValidEmail(data.email)) {
      return setError('email', {
        type: 'onChange',
        message: t('errors.invalid-email'),
      })
    }

    getByEmailMutation({ data })
  }

  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <LockKeyhole className={styles.icon} />
        </div>
        <p className={styles.title}>Restoring access</p>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          Enter the email linked to your profile, we will send you an email with
          a recovery link.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <AuthField
            placeholder="Enter your email"
            Icon={AtSign}
            error={errors.email}
            {...register('email', {
              required: {
                value: true,
                message: 'This is required field',
              },
            })}
          />
          <Button text="Send Email" type="submit" />
        </form>
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
  )
}

export default RecoverPassword
