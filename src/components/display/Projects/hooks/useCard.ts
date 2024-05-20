import { useDeleteProjectImage } from '@/api/hooks/file/useDeleteProjectImage'
import { useUploadProjectImage } from '@/api/hooks/file/useUploadProjectImage'
import { useDeleteProject } from '@/api/hooks/project/useDeleteProject'
import { useUpdateProjectDebounce } from '@/api/hooks/project/useUpdateProjectDebounce'
import { useImageUploader } from '@/hooks/useImageUploader'
import { IProjectResponse } from '@/types/project.types'
import { useDialog } from '@/zustand/useDialog'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { UseFormWatch } from 'react-hook-form'

interface IProps {
  watch: UseFormWatch<
    Partial<Omit<IProjectResponse, 'slug' | 'createdAt' | 'updatedAt'>>
  >
  id: string
}

export const useCard = ({ watch, id }: IProps) => {
  const t = useTranslations('Projects.ui')

  const { deleteProjectMutation } = useDeleteProject()

  useUpdateProjectDebounce({ watch, projectId: id })

  const inputRef = useRef<HTMLInputElement>(null)

  const { uploadProjectImageMutation } = useUploadProjectImage(id)
  const { handleUploadImage, imgFile } = useImageUploader()
  const { deleteProjectImageMutation } = useDeleteProjectImage(id)
  const { idToDelete } = useDialog()
  return {
    t,
    deleteProjectMutation,
    inputRef,
    uploadProjectImageMutation,
    handleUploadImage,
    imgFile,
    deleteProjectImageMutation,
    idToDelete,
  }
}
