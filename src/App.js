import React, {useState, useContext} from 'react'
import Modal from 'react-modal/lib/components/Modal'
import SignedUser from './SignedUser.jsx'
import {ThemeContext} from './themeContext'
import UnsignedUser from './UnsignedUser.jsx'

Modal.setAppElement('#main')

function App() {
  const {state} = useContext(ThemeContext)
  // ! Bunga tegmay turasiz hozircha
  // eslint-disable-next-line no-unused-vars
  const [isSigned, setIsSigned] = useState(true)
  return (
    <div className={`${state.darkMode ? 'dark' : ''}`}>
      {isSigned ? <SignedUser /> : <UnsignedUser />}
    </div>
  )
}

export default App
