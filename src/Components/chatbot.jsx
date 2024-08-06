import React, { useRef, useEffect } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import BotIcon from '../assets/chatbot icon-2.jpg';
import Textarea from './textarea';
import { useChatbotContext } from '../stateContext';
import Chat from './Chat';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const Chatbot = () => {

    const {setOpenBot,setUserInput, userInput, setOpenEmoji, openEmoji, queryList, displayResponse} = useChatbotContext();
    
    // always auto scroll the chat area,,, classname=center
    const centerRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the `.center` element
        if (centerRef.current) {
          centerRef.current.scrollTop = centerRef.current.scrollHeight;
        }
    }, [queryList, displayResponse]);

    const emojiClick = (emoji) => {
        setUserInput(userInput + emoji.native);
    };    

    return (
    <div className='chatBot'>
        <div className='top'>
            <img src={BotIcon} alt='' />
            <LiaTimesSolid onClick={() => {
                setOpenBot(false)
                setOpenEmoji(false)}}  className='icon' /> 
        </div>
        <div ref={centerRef}  className='center'>
            {
                queryList.length !== 0 ? <div className='chat'>
                     {
                        queryList?.map((query, id) => (
                           <Chat id={id} key={id}  query={query} />
                         ))
                     }
                    
                </div>  : <h5 className='defaultText'>
                    <span>
                        Chat with us today 🙂. 
                    </span>
                    <span>
                        Get help for any customer care solutions.
                    </span>
                </h5>   
            }
            
        </div>
        <div className='bottom'>
            <Textarea />

            {
                openEmoji &&  <div className='emojipicker'>
                    <Picker theme='light'  data={data} onEmojiSelect={emojiClick}/>
                </div>
            }
           
        </div>
        
    </div>
    )
}

export default Chatbot
