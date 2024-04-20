import type { CSSProperties } from 'react'

export interface ICategory {
  value: string
  styles: CSSProperties
  label: string
}

export interface ITaskRowData {
  title: string
  isCompleted: boolean
}

export interface IComment {
  id: string
  text: string
}
