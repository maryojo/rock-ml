import React from 'react'
import avatar from '../images/avatar2.png'
import PrimaryButton from './PrimaryButton'
import TypingText from './TypingText'
import GameChoicePopup from './GameChoicePopup'

const StoryOne = () => {
  return (
    <div className='bg-[#003459] h-4/5 w-3/5 rounded-3xl relative p-10'>
      <img src={avatar} alt='avatar' className='w-52 absolute bottom-0 left-10'/>
      <div className='w-[55%] absolute right-10 flex flex-col gap-3'>
      <p className='font-medium text-xl'>
        <TypingText text1="'Hello there, my name is The Scissors King, and I am the reigning champion of Rockville's RPS tournament for three consecutive years." text2="'Hello there, my name is The Scissors King, and I am the reigning champion of Rockville's RPS tournament for three consecutive years. I hope you're not here to challenge me, because I've seen countless amateurs like you come and go. But if you're feeling brave, feel free to participate in the tournament today.'" text3="'Hello there, my name is The Scissors King, and I am the reigning champion of Rockville's RPS tournament for three consecutive years. I hope you're not here to challenge me, because I've seen countless amateurs like you come and go. But if you're feeling brave, feel free to participate in the tournament today. Just don't be surprised when you lose to the master of scissors! 😏'"/>
        
      </p>
      {/* <div className='flex justify-end'> */}
      <PrimaryButton text='Play Game' to='/game'/>
      {/* </div> */}
      </div>
    </div>
  )
}

export default StoryOne