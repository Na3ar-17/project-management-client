export type TypeAuthFormRegister = {
  fullName: string
  email: string
  password: string
  repetPassword: string
  companyName?: string
}

export type TypeAuthFormLogin = Omit<
  TypeAuthFormRegister,
  'fullName' | 'repetPassword' | 'companyName'
>
