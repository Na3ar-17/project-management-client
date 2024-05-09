export type TypeAuthFormRegister = {
  fullName: string
  email: string
  password: string
  repeatPassword?: string
}

export type TypeAuthFormLogin = Omit<
  TypeAuthFormRegister,
  'fullName' | 'repeatPassword'
>
