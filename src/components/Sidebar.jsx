import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/image-avatar.jpg'
import logo from '../assets/logo.svg'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

<<<<<<< HEAD
const Sidebar = () => (
  <div className="w-[6.5rem] relative z-30 flex flex-wrap content-between h-full rounded-r-3xl bg-[#373B53]">
    <div className="w-full h-[6.5rem] bg-purple rounded-tr-3xl flex justify-center items-center">
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <div className="w-full flex-col flex rounded-br-3xl justify-center items-center">
      <div className="mb-8">
        <img src={moon} alt="img" />
=======
const Sidebar = () => {
  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme(prev => !prev)
  }
  return (
    <div className="w-[6.5rem] flex flex-wrap content-between h-full rounded-r-3xl bg-[#373B53]">
      <div className="w-full h-[6.5rem] bg-purple rounded-tr-3xl flex justify-center items-center">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
>>>>>>> d28cee4 (feat(IT-31-changeThemeFunction-added-to-icon))
      </div>
      <div className="w-full flex-col flex rounded-br-3xl justify-center items-center">
        <div className="mb-8">
          <button onClick={changeTheme}>
            <img src={theme ? sun : moon} alt="img" />
          </button>
        </div>
        <div className="rounded-br-3xl border-t flex py-6 px-8 justify-center items-center">
          <img src={avatar} className="w-10 h-10 rounded-full" alt="logo" />
        </div>
      </div>
    </div>
  )
}
export default Sidebar
