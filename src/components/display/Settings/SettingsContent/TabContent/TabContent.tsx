'use client'
import { useProfileDebounce } from '@/api/hooks/user/useUpdateProfileDebounce'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import SimpleField from '@/components/ui/fields/simple-field/SimpleField'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import { useImageUploader } from '@/hooks/useImageUploader'
import { EnumSettingsTabsValue, ITabContentData } from '@/types/settings.types'
import { IUser, TypeUpdateProfile } from '@/types/user.type'
import { TabsContent } from '@radix-ui/react-tabs'
import { NextPage } from 'next'
import { Controller, useForm } from 'react-hook-form'
import Block from '../Block/Block'
import styles from './TabContent.module.scss'
import { useCallback, useEffect } from 'react'
import { useDeleteAvatar } from '@/api/hooks/file/useDeleteAvatar'
import { useUploadAvatar } from '@/api/hooks/file/useUploadAvatar'

interface IProps {
  data: ITabContentData
  userData: IUser
}

const TabContent: NextPage<IProps> = ({ data, userData }) => {
  const { fullName, imgLink } = userData
  const { childrens, value } = data

  const { handleUploadImage, imgFile } = useImageUploader()
  const { uploadAvatarMutation } = useUploadAvatar()
  const { deleteAvatarMutation } = useDeleteAvatar()

  const { control, register, watch } = useForm<TypeUpdateProfile>({
    mode: 'onChange',
    defaultValues: {
      fullName,
      imgLink,
    },
  })
  useProfileDebounce({ watch })

  useEffect(() => {
    if (imgFile) {
      uploadAvatarMutation(imgFile)
    }
  }, [imgFile])

  return (
    <TabsContent className={styles.item} value={value}>
      {value === EnumSettingsTabsValue.myAccount && (
        <>
          <p className={styles.title}>My profile </p>
          <Separator className={styles.separator} />
          <div className={styles.info}>
            <AvatarComponent
              fullName={fullName}
              size={60}
              avatarStyles="w-fit"
              imgLink={imgLink}
              isEditable
              onImage={handleUploadImage}
              onImageDelete={deleteAvatarMutation}
            />

            <div className={styles.group}>
              <span>Preferred name</span>
              <Controller
                name="fullName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SimpleField
                    onInputChange={onChange}
                    {...register('fullName')}
                    defaultValue={value || ''}
                  />
                )}
              />
            </div>
          </div>
        </>
      )}
      {childrens.map((el, index) => (
        <Block data={el} key={index} />
      ))}
    </TabsContent>
  )
}

export default TabContent
