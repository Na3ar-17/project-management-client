export class DASHBOARD {
  private root = '/'
  private local: string

  MAIN: string
  AUTH: string
  HOME: string
  PROJECTS: string
  SETTINGS: string
  PASSWORD_RESET: string
  PASSWORD_RESET_CONFIRM: string
  PASSWORD_RESET_RESET: string

  constructor(local: string) {
    this.local = local
    this.MAIN = this.root
    this.AUTH = `${this.root}${this.local}/authorization`
    this.HOME = `${this.root}${this.local}/home`
    this.PROJECTS = `${this.root}${this.local}/projects`
    this.SETTINGS = `${this.root}${this.local}/settings`
    this.PASSWORD_RESET = `${this.root}${this.local}/reset-password`
    this.PASSWORD_RESET_CONFIRM = `${this.root}${this.local}/reset-password/confirm`
    this.PASSWORD_RESET_RESET = `${this.root}${this.local}/reset-password/reset`
  }
}
