import React from 'react'
import logo from '../assets/images.png';
import FloatingButton from '../Components/FloatingButton';
import Chatbot from '../Components/chatbot';
import { useChatbotContext } from '../stateContext';


const Dashboard = () => {

    const { openBot} = useChatbotContext();

    return (
    <div className='dashboard'>
        {
            // logo
        }

        <div className={`logo ${openBot ? 'active' : ''}`}>
            <div>
                <img src={logo} alt="logo" />
                <span>Unlock infinite possibilities</span>
            </div>  
            <h1>Welcome to MKU dashboard.</h1>
            <h3>Chat with us for customer care solutions.</h3>
        </div>

        {
            // open chatbot button
        }

        <FloatingButton />  

        
        {
            // chatbot 
            openBot && <Chatbot />
        }
        
    </div>
    )
}

export default Dashboard
