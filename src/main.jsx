import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.scss'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
        <App />

        <color attach="background" args={[ '#201919' ]} />
    </Canvas>
  </React.StrictMode>,
)
