'use client'
import TooltipComponent from '@/components/ui/tooltip-component/TooltipComponent'
import AlertDialogComponent from '@/components/ui/windows/confirm-delete-component/AlertDialogComponent'
import { IProjectResponse, TypeUpdateProjectCard } from '@/types/project.types'
import cn from 'clsx'
import { ImageIcon, ImageUp } from 'lucide-react'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCard } from '../hooks/useCard'
import styles from './Card.module.scss'
import CardContent from './CardContent'
import ImageComponent from './ImageComponent/ImageComponent'

interface IProps {
  data: IProjectResponse
}

const Card: NextPage<IProps> = ({ data }) => {
  const { end, id, name, createdAt, image, slug } = data
  const { register, control, watch } = useForm<TypeUpdateProjectCard>({
    mode: 'onChange',
    defaultValues: {
      name: name,
      image: image,
      end: end,
    },
  })
  const {
    deleteProjectImageMutation,
    deleteProjectMutation,
    handleUploadImage,
    idToDelete,
    imgFile,
    inputRef,
    t,
    uploadProjectImageMutation,
  } = useCard({ id, watch })

  useEffect(() => {
    if (imgFile) {
      uploadProjectImageMutation(imgFile)
    }
  }, [imgFile])

  return (
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
              <TooltipComponent text={t('image-upload')}>
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
      <CardContent
        props={{
          id,
          control,
          createdAt: createdAt || '',
          end,
          name,
          slug: slug || '',
        }}
      />
      <AlertDialogComponent
        onDelete={() => deleteProjectMutation(idToDelete)}
      />
    </div>
  )
}

export default Card
