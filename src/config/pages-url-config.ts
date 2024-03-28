class DASHBOARD {
  private root = '/'

  MAIN = this.root
  AUTH = `${this.root}authorization`
  HOME = `${this.root}home`
  PROJECTS = `${this.root}projects`
  SETTINGS = `${this.root}settings`
}

export const DASHBOARD_PAGES = new DASHBOARD()
