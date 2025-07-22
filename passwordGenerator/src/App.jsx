import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let passwordRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    console.log(passwordRef);
    window.navigator.clipboard.writeText(passwordRef.current?.value);
  },[password]);


  return (
    <>
      <div className='w-full max-w-fit mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-amber-800 text-white'>
        <h1 className="text-white text-center text-2xl mb-3"
        >Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3 bg-white text-black'
            value={password} type="text" ref={passwordRef} readOnly />
          <button className='bg-pink-500 px-3 rounded-r-xl text-white'
           onClick={copyPasswordToClipboard}
            >Copy</button>
        </div>
        <div className='flex gap-x-2'>
          <input onChange={(e) => { setLength(e.target.value); }} type="range" min={6} max={32} /> <label>Length{length}</label>
          <input defaultChecked={numberAllowed} onChange={(e) => { setNumberAllowed(!numberAllowed); }} type="checkbox" /> <label >Numbers</label>
          <input defaultChecked={charAllowed} onChange={(e) => { setCharAllowed(!charAllowed); }} type="checkbox" /> <label >Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
