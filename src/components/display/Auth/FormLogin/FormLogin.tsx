'use client'

import Button from '@/components/ui/buttons/button-confirm/Button'
import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { useDashboard } from '@/hooks/useDashboard'
import { cn } from '@/lib/utils'
import { TypeAuthFormLogin } from '@/types/authForm.type'
import { AtSign, Lock } from 'lucide-react'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from '../AuthForm.module.scss'
import { isValidEmail } from '../utils'
import { useAuth } from '@/api/hooks/auth/useAuth'

interface IProps {}

const FormLogin: NextPage<IProps> = ({}) => {
  const { useLogin } = useAuth()
  const { loginMutation } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<TypeAuthFormLogin>({
    mode: 'onChange',
  })
  const t = useTranslations('Auth')

  const onSubmit: SubmitHandler<TypeAuthFormLogin> = async (values) => {
    const { email } = values
    if (!isValidEmail(email)) {
      setError('email', { type: 'onChange', message: 'Invalid email' })
      return
    } else {
      loginMutation(values)
    }
  }
  const { DASHBOARD_PAGES } = useDashboard()
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(styles.form, styles.formLeft, styles.submitting)}
    >
      <h1>{t('login.sign-in')}</h1>

      <AuthField
        placeholder={t('inputs.email')}
        type="text"
        Icon={AtSign}
        error={errors.email}
        {...register('email', {
          required: {
            value: true,
            message: 'Email is required field',
          },
        })}
      />
      <AuthField
        placeholder={t('inputs.pass')}
        type="password"
        Icon={Lock}
        error={errors.password}
        {...register('password', {
          required: {
            value: true,
            message: 'Password is required field',
          },
          minLength: {
            value: 6,
            message: 'Min 6 characters',
          },
        })}
      />
      <Link
        href={DASHBOARD_PAGES.PASSWORD_RESET}
        className="cursor-pointer hover:text-light-blue active:translate-y-[2px]  transition-all"
      >
        Forgot your password?
      </Link>
      <Button
        className="mt-2"
        disabled={isSubmitting}
        type="submit"
        text={t('login.sign-in')}
      />
    </form>
  )
}

export default FormLogin
