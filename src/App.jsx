// React imports
import { useState } from 'react'

// Module imports
import './App.css'
import { cipher, decipher } from './algorithm'
import { Copy } from 'react-feather'

function App() {
  const [shift, setShift] = useState(1)
  const [cipherInput, setCipherInput] = useState('')
  const [cipheredMsg, setCipheredMsg] = useState('')

  const [dShift, setDShift] = useState(1)
  const [decipherInput, setDecipherInput] = useState('')
  const [decipheredMsg, setDecipheredMsg] = useState('')

  function handleCipherChange(e) {
    const textToCipher = e.target.value
    setCipherInput(textToCipher)
    setCipheredMsg(cipher(textToCipher, shift))
  }

  function handleShiftChange(e) {
    const newShiftValue = e.target.value
    setShift(newShiftValue)
    setCipheredMsg(cipher(cipherInput, newShiftValue))
  }

  function handleDecipherChange(e) {
    const textToDecipher = e.target.value
    setDecipherInput(textToDecipher)
    setDecipheredMsg(decipher(textToDecipher, dShift))
  }

  function handleDShiftChange(e) {
    const newShiftValue = e.target.value
    setDShift(newShiftValue)
    setDecipheredMsg(decipher(decipherInput, newShiftValue))
  }

  return (
    <div className="App">
      {/* Encryption section */}
      <div className="font-bold rounded-lg bg-emerald-300 p-4 mt-6 mx-2 sm:mx-10 hover:drop-shadow-xl bg-blend-lighten">
        <p className="mb-1 text-2xl px-3">Enter the message you want to encrypt:</p>
        <input type="text" value={cipherInput} onChange={handleCipherChange} name='text' className="w-72 px-3 py-2 bg-transparent focus:outline-none mb-2 text-lg text-cyan-900" placeholder="Message" />
        <br />
        <p className="mb-1 text-xl px-3">Shift Value:</p>
        <input type="number" defaultValue={shift} onChange={handleShiftChange} name="Shift value" min="1" max="25" className='w-16 h-6 px-3 focus:outline-none bg-transparent text-lg text-cyan-900 mb-2 text-center' />
        <br />
        <p className='px-3 text-2xl mb-1'>Encrypted Message:</p>
        <p className='c-result px-3 text-lg py-2 text-cyan-900'>{cipheredMsg}</p>
        <button className="bg-orange-400 p-2 text-zinc-50 mx-3 my-6 text-md"><Copy size={24} /></button>
        <br />
        <button className="bg-blue-950 px-3 py-2 text-zinc-50 mx-3 mb-4 text-md">Load random</button>
        <button className="bg-red-500 px-3 py-2 text-zinc-50 mx-3 mb-4 text-md">Clear field</button>
      </div>

      {/* Decryption section */}
      <div className="font-bold rounded-lg bg-emerald-300 p-4 mt-6 mx-2 sm:mx-10 hover:drop-shadow-xl bg-blend-lighten">
        <p className="mb-1 text-2xl px-3">Enter the ciphered message you want to decrypt:</p>
        <input type="text" value={decipherInput} onChange={handleDecipherChange} name='text' className="w-72 px-3 py-2 bg-transparent focus:outline-none mb-2 text-lg text-cyan-900" placeholder="Ciphered Message" />
        <br />
        <p className="mb-1 text-xl px-3">Shift Value:</p>
        <input type="number" defaultValue={dShift} onChange={handleDShiftChange} name="Shift value" min="1" max="25" className='w-16 h-6 px-3 focus:outline-none bg-transparent text-lg text-cyan-900 mb-2 text-center' />
        <br />
        <p className='px-3 text-2xl mb-1'>Decrypted Message:</p>
        <p className='c-result px-3 text-lg py-2 text-cyan-900'>{decipheredMsg}</p>
        <button className="bg-orange-400 p-2 text-zinc-50 mx-3 my-6 text-md"><Copy size={24} /></button>
        <br />
      </div>
    </div>
  )
}

export default App
