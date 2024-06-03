'use client'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import cn from 'clsx'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import styles from './AuthForm.module.scss'
import FormLogin from './FormLogin/FormLogin'
import FormRegister from './FormRegister/FormRegister'
import AuthSkeleton from '@/components/ui/skeletons/auth-skeleton/AuthSkeleton'

type TypeIsFormActive = 'true' | 'false'

const AuthForm: NextPage = () => {
  const [isActive, setIsActive, isLoading] = useLocalStorage<TypeIsFormActive>({
    defaultValue: 'false',
    key: 'form-state',
  })
  const t = useTranslations('Auth')

  const handleRegister = () => {
    setIsActive('true')
  }

  const handleLogin = () => {
    setIsActive('false')
  }

  if (isLoading) {
    return <AuthSkeleton />
  }

  return (
    <div className={cn(styles.container, isActive === 'true' && styles.active)}>
      <div className={styles['form-container']}>
        <FormLogin />
      </div>
      <div className={styles['form-container']}>
        <FormRegister />
      </div>
      <div className={styles.toogle}>
        <div className={cn(styles['toggle-panel'], styles['toggle-left'])}>
          <h1>{t('register.title')}</h1>
          <p className={styles.description}>{t('register.subTitle')}</p>
          <button onClick={handleLogin} className={styles.button}>
            {t('login.sign-in')}
          </button>
        </div>
        <div className={cn(styles['toggle-panel'], styles['toggle-right'])}>
          <h1>{t('login.title')}</h1>
          <p className={styles.description}>{t('login.subTitle')}</p>
          <button onClick={handleRegister} className={styles.button}>
            {t('register.sign-up')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
