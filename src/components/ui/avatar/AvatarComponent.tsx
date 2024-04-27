'use client'
import { NextPage } from 'next'
import { Avatar, AvatarImage } from '@/components/ui/shadcn/ui/avatar'
import styles from './AvatarComponent.module.scss'
import { ImageUp, Trash2 } from 'lucide-react'
import cn from 'clsx'
import { fullNameToInitials } from './FullUserAvatar/utils'
import { useRef } from 'react'
export interface IUserAvatarProps {
  imgLink?: string
  size?: number
  avatarStyles?: string
  isEditable?: boolean
  fullName?: string
  onImage?: (event: any) => void
}

const AvatarComponent: NextPage<IUserAvatarProps> = ({
  imgLink,
  size = 40,
  avatarStyles,
  isEditable = false,
  fullName,
  onImage,
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
            src={imgLink}
            alt="avatar"
            className={styles.image}
          />
        )}

        {isEditable && (
          <div className={styles.actions}>
            <ImageUp
              onClick={() => imageRef?.current?.click()}
              className={cn(styles.icon, styles.upload)}
            />
            <Trash2 className={cn(styles.icon, styles.delete)} />
          </div>
        )}
        <input
          name="image"
          type="file"
          ref={imageRef}
          hidden
          onChange={onImage}
        />
      </div>
    </Avatar>
  )
}

export default AvatarComponent
