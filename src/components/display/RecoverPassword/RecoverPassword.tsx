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
import { any, string } from 'zod'

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
        <p className={styles.title}>{t('recover.title')}</p>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{t('recover.description')}</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <AuthField
            placeholder={t('inputs.email')}
            Icon={AtSign}
            error={errors.email}
            {...register('email', {
              required: {
                value: true,
                message: t('errors.base'),
              },
            })}
          />
          <Button text={t('recover.button')} type="submit" />
        </form>
      </div>
      <div className={styles.footer}>
        <Link
          className="cursor-pointer hover:text-light-blue active:translate-y-[2px]  transition-all"
          href={DASHBOARD_PAGES.AUTH}
        >
          {t('recover.return')}
        </Link>
      </div>
    </div>
  )
}

export default RecoverPassword
