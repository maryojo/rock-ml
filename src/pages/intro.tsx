import React from 'react'
import Introduction from '../components/Introduction'
import Navbar from '../components/Navbar'
import TypingText from '../components/TypingText'

const Intro = () => {
  return (
    <section className='w-screen h-screen'>
      <Navbar/>
      <Introduction/>
    </section>
  )
}

export default Intro