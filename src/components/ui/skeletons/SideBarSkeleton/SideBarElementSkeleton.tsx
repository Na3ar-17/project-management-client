import { NextPage } from 'next'
import { Skeleton } from '@/components/ui/shadcn/ui/skeleton'
import { cn } from '@/lib/utils'

interface IProps {
  className?: string
}

const SideBarElementSkeleton: NextPage<IProps> = ({ className }) => {
  return (
    <Skeleton
      className={cn('bg-border/70 w-[155px] h-[27px] px-2 py-3', className)}
    />
  )
}

export default SideBarElementSkeleton
