import { NextPage } from 'next'
import './Spinner.scss'
interface IProps {}

const Spinner: NextPage<IProps> = ({}) => {
  return (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
