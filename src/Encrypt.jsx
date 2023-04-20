// React imports
import { useState } from "react"

// Module imports
import { cipher } from "./algorithm"
import { Copy } from 'react-feather'

const randomTexts = [
    'Suiii', 'I don\'t know what to type', 
    'I am dumb', 
    'This app is so cool', 
    'I wonder who made such an awesome app', 
    'Check the footer for the creator\'s name',
    'I love this app'
]

export default function Encrypt(props) {
    const { changeMode } = props

    const [shift, setShift] = useState(1)
    const [cipherInput, setCipherInput] = useState('')
    const [cipheredMsg, setCipheredMsg] = useState('')

    function loadRandom() {
        const randomText = randomTexts[Math.floor(Math.random()*randomTexts.length)]
        setCipherInput(randomText)
        setCipheredMsg(cipher(randomText, shift))
    }

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
    
      function copyCiphered() {
        navigator.clipboard.writeText(cipheredMsg).then(alert('Copied'))
      }

    return (
        <div className="font-bold rounded-lg bg-emerald-300 p-4 mt-6 mx-2 sm:mx-10 hover:drop-shadow-xl bg-blend-lighten mb-3">
            <p className="mb-1 text-2xl px-3">Enter the message you want to encrypt:</p>
            <input type="text" value={cipherInput} onChange={handleCipherChange} name='text' className="w-72 px-3 py-2 bg-transparent focus:outline-none mb-2 text-lg text-cyan-900" placeholder="Message" />
            <br />
            <p className="mb-1 text-xl px-3">Shift Value:</p>
            <input type="number" defaultValue={shift} onChange={handleShiftChange} name="Shift value" min="1" max="25" className='w-16 h-6 px-3 focus:outline-none bg-transparent text-lg text-cyan-900 mb-2 text-center' />
            <br />
            <p className='px-3 text-2xl mb-1'>Encrypted Message:</p>
            <p className='c-result px-3 text-lg py-2 text-cyan-900'>{cipheredMsg}</p>
            <button onClick={copyCiphered} className="bg-orange-400 p-2 text-zinc-50 mx-3 my-6 text-md"><Copy size={24} /></button>
            <br />
            <button onClick={loadRandom} className="bg-blue-950 px-3 py-2 text-zinc-50 mx-3 mb-4 text-md">Load random</button>
            <button onClick={changeMode} className="bg-red-500 px-3 py-2 text-zinc-50 mx-3 mb-4 text-md">Switch to decryption mode</button>
        </div>
    )
}