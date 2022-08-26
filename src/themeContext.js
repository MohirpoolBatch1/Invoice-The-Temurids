import {createContext, useReducer} from 'react'

import {initialState, themeReducer} from './themeReducer'

export const ThemeContext = createContext()

function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
