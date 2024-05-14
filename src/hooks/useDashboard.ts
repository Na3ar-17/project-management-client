import { DASHBOARD } from '@/config/pages-url-config'

export const useDashboard = () => {
  const DASHBOARD_PAGES = new DASHBOARD()
  return { DASHBOARD_PAGES }
}
