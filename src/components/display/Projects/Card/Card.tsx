'use client'
import ContextMenuComponent from '@/components/ui/context-menu/ContextMenuComponent'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { IProjectResponse, TypeUpdateProjectCard } from '@/types/project.types'
import cn from 'clsx'
import { ExternalLink, ImageIcon, ImageUp, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from './Card.module.scss'

import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ImageComponent from './ImageComponent/ImageComponent'
import { IMAGE_URL } from '@/constants/url.constants'
import { useUpdateProjectDebounce } from '@/api/hooks/project/useUpdateProjectDebounce'
import TooltipComponent from '@/components/ui/tooltip-component/TooltipComponent'
import { useUploadProjectImage } from '@/api/hooks/file/useUploadProjectImage'
import { useImageUploader } from '@/hooks/useImageUploader'
import { useDeleteProjectImage } from '@/api/hooks/file/useDeleteProjectImage'
import { useDeleteProject } from '@/api/hooks/project/useDeleteProject'

const Card: NextPage<IProjectResponse> = ({
  id,
  name,
  end,
  createdAt,
  image,
  slug,
}) => {
  const {
    register,
    control,
    formState: { errors },
    setError,
    watch,
  } = useForm<TypeUpdateProjectCard>({
    mode: 'onChange',
    defaultValues: {
      name: name,
      image: image,
      end: end,
    },
  })
  const { deleteProjectMutation } = useDeleteProject()

  useUpdateProjectDebounce({ watch, projectId: id })

  const inputRef = useRef<HTMLInputElement>(null)

  const { uploadProjectImageMutation } = useUploadProjectImage(id)
  const { handleUploadImage, imgFile } = useImageUploader()
  const { deleteProjectImageMutation } = useDeleteProjectImage(id)

  useEffect(() => {
    if (imgFile) {
      uploadProjectImageMutation(imgFile)
    }
  }, [imgFile])

  return (
    <ContextMenuComponent
      onDelete={() => deleteProjectMutation(id)}
      isEdit={false}
    >
      <div className={cn(styles.card)}>
        {image ? (
          <>
            <ImageComponent
              onImageDelete={deleteProjectImageMutation}
              alt={name}
              image={image}
            />
          </>
        ) : (
          <div className={styles['no-image']}>
            <ImageIcon strokeWidth={1.5} className={styles.icon} />
            <div className={styles.action}>
              {!image && (
                <TooltipComponent text="Upload image">
                  <div className={styles.group}>
                    <ImageUp
                      strokeWidth={1.8}
                      className={styles['icon-action']}
                      onClick={() => inputRef?.current?.click()}
                    />
                    <input
                      onChange={handleUploadImage}
                      type="file"
                      hidden
                      ref={inputRef}
                    />
                  </div>
                </TooltipComponent>
              )}
            </div>
          </div>
        )}
        <div className={styles.content}>
          <Controller
            name="name"
            control={control}
            defaultValue={name}
            render={({ field: { onChange, value } }) => {
              return (
                <TransparentField
                  {...register('name')}
                  className="text-xl w-full"
                  value={value}
                  onInputChange={onChange}
                />
              )
            }}
          />
          <div className={styles.time}>
            <Controller
              name="end"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePickerComponent
                  onChange={onChange}
                  end={value ? value : end || ''}
                  start={createdAt || ''}
                />
              )}
            />
            <Link
              className="w-fit"
              href={`${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/dashboard`}
            >
              <ExternalLink className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </ContextMenuComponent>
  )
}

export default Card
