export class DASHBOARD {
  private root = '/'

  MAIN: string
  AUTH: string
  HOME: string
  PROJECTS: string
  SETTINGS: string

  constructor() {
    this.MAIN = this.root
    this.AUTH = `${this.root}authorization`
    this.HOME = `${this.root}home`
    this.PROJECTS = `${this.root}projects`
    this.SETTINGS = `${this.root}settings`
  }
}
