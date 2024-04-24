import { NextPage } from 'next'
import cn from 'clsx'

interface IProps {
  text: string
  styles?: string
}

const Heading: NextPage<IProps> = ({ styles, text }) => {
  return (
    <header
      className={cn(
        'text-text2 text-[22px] border-b-2 w-full border-border border-l-0 border-r-0 border-t-0 border-solid py-2 px-2 pr-10',
        styles
      )}
    >
      {text}
    </header>
  )
}

export default Heading
