export const isValidEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === true

export const isFullnameValid = (fullname: string) =>
  /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/.test(fullname) === true &&
  fullname.split(' ').length == 2
