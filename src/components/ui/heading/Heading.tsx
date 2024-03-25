import { NextPage } from 'next'

interface IProps {
  text: string
  styles?: string
}

const Heading: NextPage<IProps> = ({ styles, text }) => {
  return (
    <header
      className={`text-text2 text-[22px] border-b-2 w-full border-border border-l-0 border-r-0 border-t-0 border-solid py-2 px-2 ${
        styles ? styles : ''
      }`}
    >
      {text}
    </header>
  )
}

export default Heading
