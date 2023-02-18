import React from 'react'
import avatar from '../images/avatar2.png'
import PrimaryButton from './PrimaryButton'
import TypingText from './TypingText'
import GameChoicePopup from './GameChoicePopup'
import ScoreCard from './ScoreCard'
import rock  from '../images/rock.png'
import paper from '../images/paper.png'



const GameBoard = () => {
  return (
    <div className='bg-[#003459] h-4/5 w-[65%] rounded-3xl p-10 shadow-2xl flex flex-col justify-between'>
      <p className='text-center font-bold'>You go first, don't worry, Scissors King can't see your moves. Only the audience can see all moves</p>
      <div className='h-full flex justify-around items-center'>
        <div>
          <img src={rock} className='w-32'/>
        </div>
        <div>
        <img src={paper} className='w-32'/>
        
      </div>
      </div>
      
      <ScoreCard YourScore={12} ComputerScore={32}/>
    </div>
  )
}

export default GameBoard;