import { Suspense } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Inicio from './pages/inicio/Inicio'

function App() {

  return (
    <Suspense>
      <Home />
    </Suspense>
  )
}

export default App
