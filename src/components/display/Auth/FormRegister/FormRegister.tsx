import { useAuth } from '@/api/hooks/auth/useAuth'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { AtSign, Lock, Repeat2, User } from 'lucide-react'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import styles from '../AuthForm.module.scss'
import { useOnSubmit } from '../hooks/useOnSubmit'

const FormRegister: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TypeAuthFormRegister>({
    mode: 'onChange',
  })
  const t = useTranslations('Auth')
  const { useRegister } = useAuth()
  const { registerMutation, isPending } = useRegister()

  const { onSubmit } = useOnSubmit({ setError, registerMutation })
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.formRight}`}
    >
      <h1>{t('register.sign-up')}</h1>
      <AuthField
        disabled={isPending || isSubmitting}
        placeholder={t('inputs.email')}
        type="text"
        Icon={AtSign}
        error={errors.email}
        {...register('email', {
          required: {
            value: true,
            message: t('errors.base'),
          },
        })}
      />
      <AuthField
        disabled={isPending || isSubmitting}
        placeholder={t('inputs.pass')}
        type="password"
        Icon={Lock}
        error={errors.password}
        {...register('password', {
          required: {
            value: true,
            message: t('errors.base'),
          },
          minLength: {
            value: 6,
            message: t('errors.pass'),
          },
        })}
      />
      <AuthField
        disabled={isPending || isSubmitting}
        placeholder={t('inputs.repeat-pass')}
        type="password"
        Icon={Repeat2}
        error={errors.repeatPassword}
        {...register('repeatPassword', {
          required: {
            value: true,
            message: t('errors.pass-match'),
          },
          minLength: {
            value: 6,
            message: t('errors.pass'),
          },
        })}
      />
      <AuthField
        disabled={isPending || isSubmitting}
        error={errors.fullName}
        placeholder={t('inputs.fullname')}
        type="text"
        Icon={User}
        {...register('fullName', {
          required: {
            value: true,
            message: t('errors.base'),
          },
        })}
      />
      <Button
        disabled={isPending || isSubmitting}
        isActionLoading={isPending || isSubmitting}
        text={t('register.sign-up')}
        type="submit"
      />
    </form>
  )
}

export default FormRegister
