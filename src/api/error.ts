export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message

  return message
    ? typeof error.response.data === 'object'
      ? message[0]
      : message
    : error.message
}
