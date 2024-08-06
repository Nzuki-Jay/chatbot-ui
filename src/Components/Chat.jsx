import React from 'react'
import Query from './Query';
import Response from './Response';
import { useState, useEffect, useRef } from 'react';
import { useChatbotContext } from '../stateContext';

// a single chat contains
const Chat = ({query, id}) => {

  const {queryList, displayResponse, setDisplayResponse} = useChatbotContext();

  // responded chat
  const [responded, setResponded] = useState({})

  // Function to update the responded state
  const updateResponded = (id, status) => {
    setResponded(prev => ({ ...prev, [id]: status }));
  };

  useEffect(() => {
    setDisplayResponse(false)

    const timer = setTimeout(() => {
      setDisplayResponse(true);
    }, 500);

    // Clean up the timeout when the component unmounts or when queryList changes
    return () => clearTimeout(timer);
  }, [queryList])

  useEffect(() => {
    if (displayResponse) {
      const resetTimer = setTimeout(() => {
        setDisplayResponse(false);
        updateResponded(id, true)
      }, 1000); // Adjust the duration as needed
  
      return () => clearTimeout(resetTimer);
    }
  }, [displayResponse]);


  return (
    <div className='chatItem'>
        <Query query={query}/> 
        {
          displayResponse && !responded[id] && <p style={{color: 'green'}}>loading...</p>
        } 

        {
          responded[id] && <Response />
        }
    </div>
  )
}

export default Chat
