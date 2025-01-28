import { useState } from 'react'
import Componente from './components/Componente'
import TemplateExpression from './components/TemplateExpressions'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos</h1>
      <Componente />
      <TemplateExpression />
    </>
  )
}

export default App
