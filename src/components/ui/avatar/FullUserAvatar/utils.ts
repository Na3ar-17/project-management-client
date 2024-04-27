export const fullNameToInitials = (fullName: string): string => {
  return fullName
    .split(' ')
    .map((el) => el.charAt(0))
    .join('')
}
