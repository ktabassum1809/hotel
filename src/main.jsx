
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from  "react-router-dom";
import RoomContextProvider from './context/RoomContext.jsx';

createRoot(document.getElementById('root')).render(
<RoomContextProvider >  
<BrowserRouter>
<App />
</BrowserRouter>
</RoomContextProvider>
   
  
)
