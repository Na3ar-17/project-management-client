import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'

export interface IBlockStatistics {
  id?: string
  Icon: ForwardRefExoticComponent<LucideProps>
  iconColor: string
  background: string
  title: string
  value: number
}
