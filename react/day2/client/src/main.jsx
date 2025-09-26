import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchCards from './FetchCards.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FetchCards apiUrl="https://jsonplaceholder.typicode.com/posts" wordsLimit={20} />
  </StrictMode>,
)
