import React from 'react'
import { TypeAnimation } from 'react-type-animation';

interface TextProps {
  text1: string,
  text2: string,
  text3: string
}


const TypingText: React.FC<TextProps> = ({text1, text2, text3}) => {
  return (
    <TypeAnimation
      sequence={[
        1000,
        `${text1}`, 
        3000,
        `${text2}`, 
        3000,
        `${text3}`,
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