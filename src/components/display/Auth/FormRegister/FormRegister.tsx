import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { AtSign, Repeat2, User, Lock } from 'lucide-react'
import { NextPage } from 'next'
import styles from '../AuthForm.module.scss'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { useRegister } from '@/api/hooks/auth/useRegister'
import { useTranslations } from 'next-intl'
import { useOnSubmit } from '../hooks/useOnSubmit'

const FormRegister: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TypeAuthFormRegister>({
    mode: 'onChange',
  })
  const t = useTranslations('Auth')
  const { registerMutation } = useRegister()

  const { onSubmit } = useOnSubmit({ setError, registerMutation })
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.formRight}`}
    >
      <h1>{t('register.sign-up')}</h1>
      <AuthField
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
      <Button text={t('register.sign-up')} type="submit" />
    </form>
  )
}

export default FormRegister
