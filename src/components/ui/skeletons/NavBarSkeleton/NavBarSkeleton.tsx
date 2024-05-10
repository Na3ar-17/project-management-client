import { NextPage } from 'next'
import { Skeleton } from '@/components/ui/shadcn/ui/skeleton'
import { cn } from '@/lib/utils'
import { TypeIsHidden } from '@/types/sideBar.type'

interface IProps {
  isHidden?: TypeIsHidden
}

const NavBarSkeleton: NextPage<IProps> = ({ isHidden }) => {
  return (
    <Skeleton
      className={cn(
        'h-[70px] bg-border/50 flex items-center justify-between px-7',
        isHidden === 'false' ? 'calc(100% - 190px)' : '100%'
      )}
    >
      <Skeleton className="bg-border/70 w-[83px] h-[32px] rounded-md" />
      <Skeleton className="bg-border/70 w-[223px] h-[48px] rounded-md" />
    </Skeleton>
  )
}

export default NavBarSkeleton
