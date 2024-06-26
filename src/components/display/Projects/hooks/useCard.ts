import { useFile } from '@/api/hooks/file/useFile'
import { useProject } from '@/api/hooks/project/useProject'
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
  const { useDeleteProject } = useProject()

  const { deleteProjectMutation } = useDeleteProject()

  useUpdateProjectDebounce({ watch, projectId: id })

  const inputRef = useRef<HTMLInputElement>(null)

  const { useDeleteProjectImage, useUploadProjectImage } = useFile()
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
