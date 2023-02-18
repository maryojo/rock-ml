import React from 'react'
import TypingText from './TypingText'
import avatar from '../images/avatar.png'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'



const Introduction: React.FC = () => {
  const [showButton, setShowButton] = React.useState(false);

  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <div className='w-44 md:w-64'>
        <img src={avatar} alt='' />
      </div>
      <div className='flex flex-col justify-center'>
        <p className='text-center text-2xl'>
        Hi, there!
        </p>
        <TypingText text1='yesss' text2='njjhj' text3='hjghgh'/>
      </div>
      <div className='flex'>
        <SecondaryButton text='Read again' />
        <PrimaryButton text='Start game' to='/play'/>
      </div>

    </div>
  )
}

export default Introduction