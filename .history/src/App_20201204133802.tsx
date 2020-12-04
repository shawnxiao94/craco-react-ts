import React from 'react'
import logo from '@/logo.svg'
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={50} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">你好啊</Button>
        <Button type="link">Link Button</Button>
      </header>
    </div>
  )
}

export default App
