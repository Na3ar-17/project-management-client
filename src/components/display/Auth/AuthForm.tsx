'use client'
import { NextPage } from 'next'
import styles from './AuthForm.module.scss'
import { useState } from 'react'
import { AtSign, Building2, Github, Lock, Repeat2, User } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeAuthForm } from '@/types/authForm.type'
import AuthField from '@/components/ui/fields/auth-field/AuthField'

const AuthForm: NextPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleRegister = () => {
    setIsActive(!isActive)
  }

  const handleLogin = () => {
    setIsActive(!isActive)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeAuthForm>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TypeAuthForm> = (values) => {
    console.log(values)
  }

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles['form-container']}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} ${styles.formLeft}`}
        >
          <h1>Sing In</h1>
          <AuthField placeholder="Email" type="email" Icon={AtSign} />
          <AuthField placeholder="Password" type="password" Icon={Lock} />
          <p>Forget Your Password?</p>
          <button type="submit" className={styles.button}>
            Sing In
          </button>
        </form>
      </div>
      <div className={styles['form-container']}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} ${styles.formRight}`}
        >
          <h1>Sign Up</h1>
          <AuthField placeholder="Email" type="email" Icon={AtSign} />
          <AuthField placeholder="Password" type="password" Icon={Lock} />
          <AuthField
            placeholder="Repet password"
            type="password"
            Icon={Repeat2}
          />
          <AuthField placeholder="Full name" type="text" Icon={User} />
          <AuthField placeholder="Company Name" type="text" Icon={Building2} />
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
      <div className={styles.toogle}>
        <div className={`${styles['toggle-panel']}  ${styles['toggle-left']} `}>
          <h1>Hello, Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button onClick={handleLogin} className={styles.button}>
            Sign In
          </button>
        </div>
        <div
          className={`${styles['toggle-panel']}  ${styles['toggle-right']} `}
        >
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button onClick={handleRegister} className={styles.button}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
