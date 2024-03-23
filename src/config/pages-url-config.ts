class DASHBOARD {
  private root = '/'

  MAIN = this.root
  AUTH = `${this.root}/authorization`
  HOME = `${this.root}/home`
}

export const DASHBOARD_PAGES = new DASHBOARD()
