import { NextPage } from 'next'
import { Skeleton } from '@/components/ui/shadcn/ui/skeleton'
const SettingsSkeleton: NextPage = () => {
  return (
    <div>
      <Skeleton className="h-[535px] rounded-md mt-4 w-full bg-border/50" />
    </div>
  )
}

export default SettingsSkeleton
