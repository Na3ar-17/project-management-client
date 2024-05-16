import { TypeAuthFormRegister } from '@/types/authForm.type'
import { SubmitHandler, UseFormSetError } from 'react-hook-form'
import { isValidEmail, isFullnameValid } from '../utils'
import { useRegister } from '@/api/hooks/auth/useRegister'

interface IProps {
  setError: UseFormSetError<TypeAuthFormRegister>
}

export const useOnSubmit = ({ setError }: IProps) => {
  const onSubmit: SubmitHandler<TypeAuthFormRegister> = (values) => {
    const { repeatPassword, ...dto } = values
    const { registerMutation } = useRegister()

    if (!isValidEmail(dto.email)) {
      return setError('email', { type: 'onChange', message: 'Invalid email' })
    }

    if (repeatPassword !== dto.password) {
      return setError('repeatPassword', {
        type: 'onChange',
        message: 'Passwords must match',
      })
    }

    if (!isFullnameValid(dto.fullName)) {
      return setError('fullName', {
        type: 'onChange',
        message: 'Must contains only one space',
      })
    }

    registerMutation(dto)
  }

  return { onSubmit }
}
