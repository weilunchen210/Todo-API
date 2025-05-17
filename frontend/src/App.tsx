import { Profiler, useState } from 'react'
import MainContainer from './components/MainContainer/MainContainer'
import ProfileContainer from './components/ProfileContainer/ProfileContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProfileContainer>

      </ProfileContainer>
      <MainContainer>
        
      </MainContainer>
    </div>
  )
}

export default App
