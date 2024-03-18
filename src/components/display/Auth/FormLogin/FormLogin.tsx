import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { NextPage } from 'next'
import { Lock, AtSign } from 'lucide-react'
import styles from '../AuthForm.module.scss'
import { TypeAuthFormLogin } from '@/types/authForm.type'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/ui/buttons/button-confirm/Button'

interface IProps {}

const FormLogin: NextPage<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeAuthFormLogin>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeAuthFormLogin> = (values) => {
    console.log(values)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.formLeft}`}
    >
      <h1>Sing In</h1>
      <AuthField
        placeholder="Email"
        type="email"
        Icon={AtSign}
        error={errors.email}
        {...register('email', { required: true })}
      />
      <AuthField
        placeholder="Password"
        type="password"
        Icon={Lock}
        error={errors.password}
        {...register('password', { required: true, minLength: 6 })}
      />
      <p>Forget Your Password?</p>
      <Button type="submit" text="Sing In" />
    </form>
  )
}

export default FormLogin
