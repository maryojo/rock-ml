import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const TypingText: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        'We need you', 
        2000,
        'We need you to save the world!', 
        () => {
          console.log('Done typing!'); 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={0}
      // style={{ fontSize: '2em' }}
    />
  );
}

export default TypingText