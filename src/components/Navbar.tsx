import React from 'react'
import InstructionsPopup from './InstructionsPopup'

const Navbar:React.FC = () => {
  return (
    <nav className='flex justify-between px-4 py-6'>
      <InstructionsPopup/>
      <p>Welcome</p>
    </nav>
  )
}

export default Navbar