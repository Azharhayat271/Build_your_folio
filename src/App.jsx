import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/templates/site_one/components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile />
     
    </>
  )
}

export default App
