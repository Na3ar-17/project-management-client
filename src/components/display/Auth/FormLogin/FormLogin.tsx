import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { NextPage } from 'next'
import { Lock, AtSign } from 'lucide-react'
import styles from '../AuthForm.module.scss'
import { TypeAuthFormLogin } from '@/types/authForm.type'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { useState } from 'react'
import { isValidEmail } from '../utils'

interface IProps {}

const FormLogin: NextPage<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<TypeAuthFormLogin>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeAuthFormLogin> = (values) => {
    const { email } = values
    if (!isValidEmail(email)) {
      setError('email', { type: 'onChange', message: 'Invalid email' })
      return
    } else {
      console.log(values)
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.formLeft}`}
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
      <Button type="submit" text="Sing In" />
    </form>
  )
}

export default FormLogin
