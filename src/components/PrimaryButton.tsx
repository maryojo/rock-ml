import React from 'react'


interface ButtonProps {
  text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className='text-black bg-[#6FCF97] px-5 py-3 w-28'>
      {text}
    </button>
  )
}

export default PrimaryButton