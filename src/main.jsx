import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChatbotContextProvider } from './stateContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatbotContextProvider>
      <App />
    </ChatbotContextProvider> 
  </React.StrictMode>,
)
