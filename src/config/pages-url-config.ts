export class DASHBOARD {
  private locale: string
  private root = '/'

  MAIN: string
  AUTH: string
  HOME: string
  PROJECTS: string
  SETTINGS: string

  constructor(locale: string) {
    this.locale = locale
    this.MAIN = this.root
    this.AUTH = `${this.root}${this.locale}/authorization`
    this.HOME = `${this.root}${this.locale}/home`
    this.PROJECTS = `${this.root}${this.locale}/projects`
    this.SETTINGS = `${this.root}${this.locale}/settings`
  }
}
