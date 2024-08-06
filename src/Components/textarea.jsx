import React, { useState } from 'react';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { useChatbotContext } from '../stateContext';


const Textarea = () => {

  // context states
  const {setOpenEmoji, openEmoji, setQueryList, queryList, userInput, setUserInput} = useChatbotContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim === "") return;
    setQueryList((prev) => {
      return [...prev, userInput]
    });
    setUserInput('')
    setOpenEmoji(false)
  }


  return (
    <form onSubmit={handleSubmit} className='textArea'>
        <MdOutlineEmojiEmotions onClick={() => {setOpenEmoji(!openEmoji)}} className='icon' />
        <textarea value={userInput} onChange={(e) => {setUserInput(
          e.target.value
        )}} placeholder='Type here....'>
        </textarea>
        <button type='submit'>
            <IoIosSend className='icon' />
        </button>    
    </form>
  )
}

export default Textarea
