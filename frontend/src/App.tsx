import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://steamcommunity.com/market/listings/730/M4A1-S%20%7C%20Vaporwave%20%28Factory%20New%29" target="_blank">
          <img src={"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO7wIHahMjiMqvehHxQ_sBOhuDG_Zi7jlfhr0tsZDqhdoSRcQY9Y1iE-FHvwrjm0Ja6vpnAzXUws3Ir5S2Pmgv3308UVT93Iw/512fx384f"} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Skins + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Skin and React logos to learn more no Vite :P
      </p>
    </>
  )
}

export default App
