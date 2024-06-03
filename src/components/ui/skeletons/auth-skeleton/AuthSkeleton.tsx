import { NextPage } from 'next'
import { Skeleton } from '@/components/ui/shadcn/ui/skeleton'
import { cn } from '@/lib/utils'
interface IProps {}

const AuthSkeleton: NextPage<IProps> = ({}) => {
  return (
    <Skeleton className="w-[900px] h-[480px] bg-border/80 rounded-md"></Skeleton>
  )
}

export default AuthSkeleton
