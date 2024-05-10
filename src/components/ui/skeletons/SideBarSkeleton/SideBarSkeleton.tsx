import { Skeleton } from '@/components/ui/shadcn/ui/skeleton'
import { NextPage } from 'next'
import SideBarElementSkeleton from './SideBarElementSkeleton'

interface IProps {}

const SideBarSkeleton: NextPage<IProps> = ({}) => {
  return (
    <Skeleton className="w-[190px] h-full bg-border/50 ">
      <div className="h-[90%] flex flex-col items-start gap-[15px] pt-[100px]">
        <SideBarElementSkeleton />
        <SideBarElementSkeleton />
        <SideBarElementSkeleton />
        <SideBarElementSkeleton className="mt-auto" />
      </div>
    </Skeleton>
  )
}

export default SideBarSkeleton
