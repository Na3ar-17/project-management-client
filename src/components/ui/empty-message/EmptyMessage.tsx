import { cn } from '@/lib/utils'
import { NextPage } from 'next'

interface IProps {
  Loader?: NextPage
  title?: string
  subTitle?: string
  className?: string
  titleStyles?: string
  subTitleStyles?: string
}

const EmptyMessage: NextPage<IProps> = ({
  Loader,
  title = "You don't have any projects yet.",
  subTitle = 'Start to create one!',
  className,
  subTitleStyles,
  titleStyles,
}) => {
  return (
    <div
      className={cn(
        'flex items-center text-center justify-center flex-col gap-5 mt-20',
        className
      )}
    >
      <div>
        <p className={cn('text-menu-text text-2xl font-semibold', titleStyles)}>
          {title}
        </p>
        {subTitle && (
          <p
            className={cn('text-text2 text-xl mt-2 font-[500]', subTitleStyles)}
          >
            {subTitle}
          </p>
        )}
      </div>
      {Loader && <Loader />}
    </div>
  )
}

export default EmptyMessage
