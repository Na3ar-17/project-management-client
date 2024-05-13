'use client'

import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { NextPage } from 'next'
import { Lock, AtSign } from 'lucide-react'
import styles from '../AuthForm.module.scss'
import { TypeAuthFormLogin } from '@/types/authForm.type'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { isValidEmail } from '../utils'
import { useLogin } from '@/api/hooks/auth/useLogin'
import { cn } from '@/lib/utils'

interface IProps {}

const FormLogin: NextPage<IProps> = ({}) => {
  const { loginMutation } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<TypeAuthFormLogin>({
    mode: 'onChange',
    defaultValues: {
      email: 'test@gmail.com',
      password: '123456',
    },
  })

  const onSubmit: SubmitHandler<TypeAuthFormLogin> = async (values) => {
    const { email } = values
    if (!isValidEmail(email)) {
      setError('email', { type: 'onChange', message: 'Invalid email' })
      return
    } else {
      loginMutation(values)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(styles.form, styles.formLeft, styles.submitting)}
    >
      <h1>Sing In</h1>

      <AuthField
        placeholder="Email"
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
        placeholder="Password"
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
      <p>Forgot Your Password?</p>
      <Button disabled={isSubmitting} type="submit" text="Sing In" />
    </form>
  )
}

export default FormLogin
