import { IMAGE_URL } from '@/constants/url.constants'
import { Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import Image from 'next/image'
import styles from './ImageComponent.module.scss'
interface IProps {
  alt: string
  image: string
  onImageDelete: (imageName: string) => void
}

const ImageComponent: NextPage<IProps> = ({ alt, image, onImageDelete }) => {
  return (
    <div className={styles.image}>
      <Image
        src={IMAGE_URL + image}
        alt={alt}
        className={styles.picture}
        width={100}
        height={100}
        layout="responsive"
      />
      <>
        <Trash2
          className={styles.delete}
          onClick={() => onImageDelete(image)}
        />
        <div className={styles.overlay}></div>
      </>
    </div>
  )
}

export default ImageComponent
