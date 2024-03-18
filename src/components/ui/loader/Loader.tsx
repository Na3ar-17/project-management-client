import { NextPage } from 'next'
import styles from './Loader.module.scss'

interface IProps {
  size?: number
  isFill?: boolean
}

const Loader: NextPage<IProps> = ({ size = 96, isFill = false }) => {
  return (
    <div
      className={`${styles.container} ${
        isFill ? 'w-screen h-screen z-50' : ''
      }`}
    >
      <div
        style={{ height: size + 'px', width: size + 'px' }}
        className={`${styles.loader} ${
          isFill
            ? 'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            : ''
        }`}
      ></div>
    </div>
  )
}

export default Loader
