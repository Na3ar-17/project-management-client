'use client'
import { NextPage } from 'next'
import styles from './AuthForm.module.scss'
import { useState } from 'react'
import FormLogin from './FormLogin/FormLogin'
import FormRegister from './FormRegister/FormRegister'

const AuthForm: NextPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleRegister = () => {
    setIsActive(!isActive)
  }

  const handleLogin = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles['form-container']}>
        <FormLogin />
      </div>
      <div className={styles['form-container']}>
        <FormRegister />
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
