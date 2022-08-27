import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/image-avatar.jpg'
import logo from '../assets/logo.svg'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
import {ThemeContext} from '../themeContext'

const Sidebar = () => {
  const {state, dispatch} = useContext(ThemeContext)
  const changeTheme = () => {
    dispatch({type: 'TOGGLE_THEME'})
  }
  return (
    <div className="w-[6.5rem] flex flex-wrap z-30 content-between h-full rounded-r-3xl bg-[#373B53]">
      <div className="w-full h-[6.5rem] bg-purple rounded-tr-3xl flex justify-center items-center">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="w-full flex-col flex rounded-br-3xl justify-center items-center">
        <div className="mb-8">
          <button onClick={changeTheme}>
            <img src={state.darkMode ? sun : moon} alt="img" />
          </button>
        </div>
        <div className="rounded-br-3xl border-t flex py-6 px-6 justify-center items-center">
          <img src={avatar} className="w-10 h-10 rounded-full" alt="logo" />
        </div>
      </div>
    </div>
  )
}
export default Sidebar
