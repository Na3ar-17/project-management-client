import { TypeAuthFormRegister } from '@/types/authForm.type'
import { IAuthResponse } from '@/types/user.type'
import { UseMutateFunction } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { SubmitHandler, UseFormSetError } from 'react-hook-form'
import { isFullnameValid, isValidEmail } from '../utils'

interface IProps {
  setError: UseFormSetError<TypeAuthFormRegister>
  registerMutation: UseMutateFunction<
    IAuthResponse,
    Error,
    TypeAuthFormRegister,
    unknown
  >
}

export const useOnSubmit = ({ setError, registerMutation }: IProps) => {
  const t = useTranslations('Auth')

  const onSubmit: SubmitHandler<TypeAuthFormRegister> = (values) => {
    const { repeatPassword, ...dto } = values

    if (!isValidEmail(dto.email)) {
      return setError('email', {
        type: 'onChange',
        message: t('errors.invalid-email'),
      })
    }

    if (repeatPassword !== dto.password) {
      return setError('repeatPassword', {
        type: 'onChange',
        message: t('errors.pass-match'),
      })
    }

    if (!isFullnameValid(dto.fullName)) {
      return setError('fullName', {
        type: 'onChange',
        message: t('errors.fullname'),
      })
    }

    registerMutation(dto)
  }

  return { onSubmit }
}
