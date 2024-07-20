import React from "react"

const NavBar = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='h-20 backdrop-blur-sm backdrop-brightness-105 blur-sm bg-neutral-900-300 bg-opacity-30 z-30 fixed w-full'>
      {children}
    </div>
  )
}

export default NavBar
