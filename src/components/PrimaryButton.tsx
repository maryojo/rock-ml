import React from 'react'
import { Link } from 'react-router-dom';


interface ButtonProps {
  text: string,
  to: string
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <Link to={to}>
      <button className='text-black bg-[#6FCF97] px-5 py-3 w-28 font-medium'>
        {text}
      </button>
    </Link>
  )
}

export default PrimaryButton