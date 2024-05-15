import { DASHBOARD } from '@/config/pages-url-config'
import { useLocale } from 'next-intl'

export const useDashboard = () => {
  const locale = useLocale()
  const DASHBOARD_PAGES = new DASHBOARD(locale)

  return { DASHBOARD_PAGES }
}
