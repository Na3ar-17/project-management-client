'use client'
import Button from '@/components/ui/buttons/button-confirm/Button'
import OTPField from '@/components/ui/fields/otp-field/OTPField'
import { zodResolver } from '@hookform/resolvers/zod'
import { RectangleEllipsis } from 'lucide-react'
import { NextPage } from 'next'
import { Controller, useForm } from 'react-hook-form'
import { ZodType, z as zod } from 'zod'
import styles from './Confirm.module.scss'

const schema: ZodType<{ code: string }> = zod.object({
  code: zod.string().min(6),
})
const Confirm: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ code: string }>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const onSubmit = (values: { code: string }) => {
    console.log(values)
  }

  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <RectangleEllipsis className={styles.icon} />
        </div>
        <p className={styles.title}>Confirm code</p>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          We've sent a 6 characters code you must confirm
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, value } }) => (
              <OTPField onChange={onChange} value={value} />
            )}
          />
          {errors.code && (
            <p className="text-red-text">Code must be 6 charakters</p>
          )}
          <Button text="Confirm" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Confirm
