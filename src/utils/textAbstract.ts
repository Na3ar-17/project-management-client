export const textAbstract = (text: string, lenght: number) => {
  if (text === null) return ''

  if (text.length <= lenght) return text

  text = text.substring(0, lenght)

  return text + '...'
}
