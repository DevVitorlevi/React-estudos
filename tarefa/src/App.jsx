
import UserDetails from '../components/UserDetails'
import './App.css'

function App() {
  const UserData = [
    { id: 1, name: 'Maria', age: 48, job: 'Diarista' },
    { id: 2, name: 'Eraldo', age: 57, job: 'Pedreiro' },
    { id: 3, name: 'Vitor', age: 16, job: 'Dev' }
  ]

  return (
    <>
      {UserData.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </>
  )
}

export default App