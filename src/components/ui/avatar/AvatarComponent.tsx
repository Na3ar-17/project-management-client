'use client'
import { Avatar, AvatarImage } from '@/components/ui/shadcn/ui/avatar'
import { IMAGE_URL } from '@/constants/url.constants'
import cn from 'clsx'
import { ImageUp, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { useRef } from 'react'
import styles from './AvatarComponent.module.scss'
import { fullNameToInitials } from './FullUserAvatar/utils'
export interface IUserAvatarProps {
  imgLink?: string
  size?: number
  avatarStyles?: string
  isEditable?: boolean
  fullName?: string
  onImage?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onImageDelete?: (imageName: string) => void
}

const AvatarComponent: NextPage<IUserAvatarProps> = ({
  imgLink,
  size = 40,
  avatarStyles,
  isEditable = false,
  fullName,
  onImage,
  onImageDelete,
}) => {
  const imageRef = useRef<HTMLInputElement>(null)

  return (
    <Avatar className={cn(styles.container, avatarStyles)}>
      <div className={styles.content}>
        {!imgLink ? (
          <div
            style={{ width: `${size}px`, height: `${size}px` }}
            className={styles.initials}
          >
            <p style={{ fontSize: `${size / 2.5}px` }}>
              {fullNameToInitials(fullName || '')}
            </p>
          </div>
        ) : (
          <AvatarImage
            style={{ width: `${size}px`, height: `${size}px` }}
            src={IMAGE_URL + imgLink}
            alt="avatar"
            className={styles.image}
          />
        )}

        {isEditable && (
          <div className={styles.actions}>
            {!imgLink && (
              <ImageUp
                onClick={() => imageRef?.current?.click()}
                className={cn(styles.icon, styles.upload)}
              />
            )}
            {imgLink && onImageDelete && (
              <Trash2
                onClick={() => onImageDelete(imgLink)}
                className={cn(styles.icon, styles.delete)}
              />
            )}
          </div>
        )}
        <input type="file" ref={imageRef} hidden onChange={onImage} />
      </div>
    </Avatar>
  )
}

export default AvatarComponent
