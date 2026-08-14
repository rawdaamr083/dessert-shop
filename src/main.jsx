import { StrictMode } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Logcontext from './context/Logcontext.jsx';
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
    <Logcontext>
       
    <App />
   
    </Logcontext>
     </Router>
  </StrictMode>,
)
