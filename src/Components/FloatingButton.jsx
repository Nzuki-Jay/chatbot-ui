import React from 'react';
import { IoChatboxSharp } from "react-icons/io5";
import { useChatbotContext } from '../stateContext';

const FloatingButton = () => {

  const {setOpenBot} = useChatbotContext();

  return (
    <button onClick={() => {setOpenBot(true)}} className='floatingButton'>
        <IoChatboxSharp  className='icon'/>
    </button>
  )
}

export default FloatingButton
