import { createContext, useContext, useState } from "react";


const chatbotContext = createContext();

export const useChatbotContext = () => {
    return useContext(chatbotContext)
};

export const ChatbotContextProvider = ({children}) => {


    // opening chatbot
    const [openBot, setOpenBot]  = useState(false);

    // opening emojipicker
    const [openEmoji, setOpenEmoji] = useState(false);

    // user query list
    const [queryList, setQueryList] = useState([]);

    // form submit
    const [userInput, setUserInput] = useState('');

    // response timing
    const [displayResponse, setDisplayResponse] = useState(false);


    return <chatbotContext.Provider value={{ 
        openBot, 
        setOpenBot,
        openEmoji,
        setOpenEmoji,
        queryList,
        setQueryList,
        userInput, 
        setUserInput,
        displayResponse, 
        setDisplayResponse
        }}>
        {children}
    </chatbotContext.Provider>

}

