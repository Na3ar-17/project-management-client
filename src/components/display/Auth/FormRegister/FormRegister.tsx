import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { AtSign, Repeat2, User, Building2, Lock } from 'lucide-react'
import { NextPage } from 'next'
import styles from '../AuthForm.module.scss'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/ui/buttons/button-confirm/Button'

interface IProps {}

const FormRegister: NextPage<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeAuthFormRegister>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeAuthFormRegister> = (values) => {
    console.log(values)
  }

  if (errors) console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.formRight}`}
    >
      <h1>Sign Up</h1>
      <AuthField
        error={errors.email}
        placeholder="Email"
        type="email"
        Icon={AtSign}
        {...register('email', {
          required: true,
        })}
      />
      <AuthField
        error={errors.password}
        placeholder="Password"
        type="password"
        Icon={Lock}
        {...register('password', { required: true })}
      />
      <AuthField
        placeholder="Repet password"
        type="password"
        Icon={Repeat2}
        error={errors.repetPassword}
        {...register('repetPassword', { required: true })}
      />
      <AuthField
        error={errors.fullName}
        placeholder="Full name"
        type="text"
        Icon={User}
        {...register('fullName', { required: true })}
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
