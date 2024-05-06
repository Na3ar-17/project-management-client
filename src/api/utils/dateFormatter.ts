import dayjs from 'dayjs'

export const dateFormatter = (date: string) => {
  if (date === '') {
    return date
  }
  const formatted = dayjs(date).format('DD.MM.YYYY')
  return formatted
}
