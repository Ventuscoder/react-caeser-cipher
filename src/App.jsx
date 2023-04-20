// React imports
import { useState } from 'react'

//Component imports
import Encrypt from './Encrypt'
import Footer from './Footer'
import Decrypt from './Decrypt'

function App() {
  const [isCipher, setIsCipher] = useState(true)

  function handleModeChange() {
    setIsCipher(!isCipher)
  }

  return (
    <div className="App">
      {isCipher && <Encrypt changeMode={handleModeChange} />}
      {!isCipher && <Decrypt changeMode={handleModeChange} />}
      

      {/* Footer section */}
      <Footer />
    </div>
  )
}

export default App
