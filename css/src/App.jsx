
import Component from './components/Component'
import './styles/App.css'

function App() {
  const n = 1

  const redTitle = false

  return (
    <>
      <h1 style={n > 12 ? { color: 'blue', backgroundColor: 'black' } : null}>Style Ternário</h1>

      <div className="teste-app">
        <p>Vitor</p>
      </div>

      <Component />

      <h1 className={redTitle ? "red" : "title"}>Vitor</h1>
    </>
  )
}

export default App
