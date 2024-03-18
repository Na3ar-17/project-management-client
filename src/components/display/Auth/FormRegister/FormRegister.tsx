import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { AtSign, Repeat2, User, Building2, Lock } from 'lucide-react'
import { NextPage } from 'next'
import styles from '../AuthForm.module.scss'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { isFullnameValid, isValidEmail } from '../utils'

interface IProps {}

const FormRegister: NextPage<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<TypeAuthFormRegister>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeAuthFormRegister> = (values) => {
    const { email, password, repetPassword, fullName } = values

    if (!isValidEmail(email)) {
      setError('email', { type: 'onChange', message: 'Invalid email' })
      return
    }

    if (repetPassword !== password) {
      setError('repetPassword', {
        type: 'onChange',
        message: 'Passwords must match',
      })
      return
    }

    if (!isFullnameValid(fullName)) {
      setError('fullName', {
        type: 'onChange',
        message: 'Must contains only one space',
      })
      return
    }
    console.log(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.formRight}`}
    >
      <h1>Sign Up</h1>
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
      <AuthField
        placeholder="Repet password"
        type="password"
        Icon={Repeat2}
        error={errors.repetPassword}
        {...register('repetPassword', {
          required: {
            value: true,
            message: 'Passwords must match',
          },
          minLength: {
            value: 6,
            message: 'Min 6 characters',
          },
        })}
      />
      <AuthField
        error={errors.fullName}
        placeholder="Full name"
        type="text"
        Icon={User}
        {...register('fullName', {
          required: {
            value: true,
            message: 'Full name is required field ',
          },
        })}
      />
      <AuthField
        placeholder="Company Name"
        type="text"
        Icon={Building2}
        {...register('companyName', { required: false })}
      />
      <Button text="Sign Up" type="submit" />
    </form>
  )
}

export default FormRegister
