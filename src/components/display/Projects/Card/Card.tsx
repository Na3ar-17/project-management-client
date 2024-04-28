'use client'
import ContextMenuComponent from '@/components/ui/context-menu/ContextMenuComponent'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { IProjectResponse, TypeEditProjectCard } from '@/types/project.types'
import cn from 'clsx'
import { ImageIcon, ImageUp } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from './Card.module.scss'

import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { ChangeEventHandler, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ImageComponent from './ImageComponent/ImageComponent'

const Card: NextPage<IProjectResponse> = ({
  id,
  name,
  end,
  createdAt,
  image,
  slug,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const {
    register,
    control,
    formState: { errors },
    setError,
  } = useForm<TypeEditProjectCard>({
    mode: 'onChange',
    defaultValues: {
      name: name,
      image: image,
    },
  })

  const inputRef = useRef<HTMLInputElement>(null)
  const [imageUrl, setImageUrl] = useState<string>('')

  //TODO add type for event
  const handleUploadImage = (event: any) => {
    let img = event.target.files[0]
    setImageUrl(URL.createObjectURL(img))
  }

  const handleDeleteImage = () => {
    setImageUrl('')
  }

  return (
    <ContextMenuComponent onEdit={() => setIsEdit(!isEdit)} id={id}>
      <div className={cn(styles.card, isEdit && styles.edit)}>
        {!imageUrl ? (
          image ? (
            <ImageComponent
              onImageDelete={handleDeleteImage}
              alt={name}
              image={image}
              isEdit={isEdit}
            />
          ) : (
            <div className={styles['no-image']}>
              {isEdit ? (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <ImageUp
                      onClick={() => inputRef?.current?.click()}
                      className={styles.icon}
                      strokeWidth={1.5}
                    />
                    <p className="text-sm text-menu-text">
                      Click to upload Image
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={handleUploadImage}
                    ref={inputRef}
                    hidden
                  />
                </>
              ) : (
                <ImageIcon strokeWidth={1.5} className={styles.icon} />
              )}
            </div>
          )
        ) : (
          <ImageComponent
            onImageDelete={handleDeleteImage}
            isEdit={isEdit}
            alt={name}
            image={imageUrl || ''}
          />
        )}
        <div className={styles.content}>
          {isEdit ? (
            <Controller
              name="name"
              control={control}
              defaultValue={name}
              render={({ field: { onChange, value } }) => {
                return (
                  <TransparentField
                    {...register('name')}
                    className="text-lg w-full"
                    value={value}
                    onChange={onChange}
                  />
                )
              }}
            />
          ) : (
            <Link
              className="w-fit"
              href={`${DASHBOARD_PAGES.PROJECTS}/${slug}/dashboard`}
            >
              <p className={styles.name}>{name}</p>
            </Link>
          )}
          <div className={styles.time}>
            <Controller
              name="end"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePickerComponent
                  onChange={onChange}
                  disabled={isEdit ? false : true}
                  end={value ? value : end || ''}
                  start={createdAt || ''}
                />
              )}
            />
          </div>
        </div>
      </div>
    </ContextMenuComponent>
  )
}

export default Card
