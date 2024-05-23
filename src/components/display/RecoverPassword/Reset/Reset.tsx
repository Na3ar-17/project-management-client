'use client'
import { NextPage } from 'next'
import styles from './Reset.module.scss'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { LockKeyhole } from 'lucide-react'
import { AuthField } from '@/components/ui/fields/auth-field/AuthField'
import { useForm } from 'react-hook-form'
import { ZodType, z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock } from 'lucide-react'
import { useUser } from '@/api/hooks/user/useUser'
interface IForm {
  password: string
  repeatPassword: string
}

interface IProps {
  token: string
}

const schema: ZodType<IForm> = zod
  .object({
    password: zod.string().min(6, { message: 'At least 6 characters' }),
    repeatPassword: zod.string().min(6, { message: 'At least 6 characters' }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  })

const Reset: NextPage<IProps> = ({ token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
  const { useUpdatePassword } = useUser()
  const { data, updatePasswordMutation } = useUpdatePassword()

  const onSubmit = (values: IForm) => {
    updatePasswordMutation({
      password: values.password,
      token,
    })
  }

  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <LockKeyhole className={styles.icon} />
        </div>
        <p className={styles.title}>New Password</p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <AuthField
            {...register('password')}
            error={errors.password}
            placeholder="New Password"
            Icon={Lock}
            type="password"
          />
          <AuthField
            error={errors.repeatPassword}
            placeholder="Repeat new Password"
            {...register('repeatPassword')}
            Icon={Lock}
            type="password"
          />
          <Button text="Confirm" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Reset