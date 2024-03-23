import { PropsWithChildren, createContext } from 'react'

export const SideBarContext = createContext({
  isHiiden: false,
  setIsHidden: null,
})

export const SideBarProvider = ({ children }: PropsWithChildren) => {
  return (
    // <SideBarContext.Provider value={}>{children}</SideBarContext.Provider>
    <></>
  )
}
