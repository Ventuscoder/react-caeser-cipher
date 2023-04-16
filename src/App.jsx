import { useState } from 'react'
import './App.css'
import { Copy } from 'react-feather'

function App() {

  return (
    <div className="App">
      <div className="font-bold rounded-lg bg-emerald-300 p-4 mt-6 mx-2 sm:mx-10 hover:drop-shadow-xl bg-blend-lighten">
        <p className="mb-1 text-2xl px-3">Enter the message you want to encrypt:</p>
        <input type="text" value="Suiii" name='text' className="w-24 px-3 py-2 bg-transparent focus:outline-none mb-2 text-lg text-cyan-900" placeholder="Message" />
        <br />
        <p className="mb-1 text-xl px-3">Shift Value:</p>
        <input type="number" defaultValue="7" name="Shift value" min="1" max="25" className='w-16 h-6 px-3 focus:outline-none bg-transparent text-lg text-cyan-900 mb-2 text-center' />
        <br />
        <button className="bg-slate-950 px-3 py-2 text-zinc-50 m-3">Encrypt</button>
        <p className='px-3 text-2xl mb-1'>Encrypted Message:</p>
        <p className='px-3 text-lg py-2 text-cyan-900'>Zbppp</p>
        <button className="bg-orange-400 p-2 text-zinc-50 mx-3 mb-6 text-md"><Copy size={24} /></button>
        <br />
        <button className="bg-blue-950 px-3 py-2 text-zinc-50 mx-3 mb-4 text-md">Load random</button>
        <button className="bg-red-500 px-3 py-2 text-zinc-50 mx-3 mb-4 text-md">Clear field</button>
      </div>
    </div>
  )
}

export default App
