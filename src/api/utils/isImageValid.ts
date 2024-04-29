export const isImageValid = (image: Blob): boolean => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
  const imageType = image.type.toLowerCase()

  for (const type of allowedTypes) {
    if (type === imageType) {
      return true
    }
  }

  return false
}
