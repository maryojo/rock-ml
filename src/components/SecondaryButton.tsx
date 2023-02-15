import React from 'react'


interface ButtonProps {
  text: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className='text-[#6FCF97] border-2 border-[#6FCF97] px-5 py-3 w-28'>
      {text}
    </button>
  )
}

export default SecondaryButton