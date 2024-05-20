'use client'

import { Mic, Paperclip, Send } from 'lucide-react'
import { forwardRef, useRef } from 'react'
import AvatarComponent, { IUserAvatarProps } from '../../avatar/AvatarComponent'
import TooltipComponent from '../../tooltip-component/TooltipComponent'
import styles from './ChatField.module.scss'

interface IProps {
  placeholder?: string
  styles?: string
  userAvatar?: IUserAvatarProps
}

export const ChatField = forwardRef<HTMLInputElement, IProps>(
  ({ placeholder, userAvatar, ...props }, ref) => {
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFile = () => {
      fileRef.current?.click()
    }

    return (
      <label className={styles.lable}>
        <div className={styles.group}>
          <AvatarComponent
            size={userAvatar?.size}
            imgLink={userAvatar?.imgLink}
          />
          <input
            className={styles.input}
            placeholder={placeholder}
            ref={ref}
            type="text"
            {...props}
          />
        </div>
        {/* <div className={styles['file-block']}>
          <File className={styles['file-icon']} />
          <input ref={fileRef} type="file" hidden />
          <p className={styles.file}>text.txt</p>
        </div> */}
        <div className={styles.icons}>
          <TooltipComponent text="Voice Message">
            <Mic className={styles.icon} />
          </TooltipComponent>
          <TooltipComponent text="Chose file">
            <Paperclip className={styles.icon} onClick={handleFile} />
          </TooltipComponent>
          <Send className={styles.icon} />
        </div>
      </label>
    )
  }
)

ChatField.displayName = 'chatField'
