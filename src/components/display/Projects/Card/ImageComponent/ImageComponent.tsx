import { NextPage } from 'next'
import styles from './ImageComponent.module.scss'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'
interface IProps {
  alt: string
  image: string
  onImageDelete: () => void
}

const ImageComponent: NextPage<IProps> = ({ alt, image, onImageDelete }) => {
  return (
    <div className={styles.image}>
      <Image
        src={image}
        alt={alt}
        className={styles.picture}
        width={100}
        height={100}
      ></Image>
    </div>
  )
}

export default ImageComponent
