import { useState } from 'react'

import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;


function App() {
  
  const [list, setList] = useState(null)
  useEffect(() => {
    fetchAllCoinData()
  }, []);

  return (
    <>
      
       
    </>
  )
}

export default App
