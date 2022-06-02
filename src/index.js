// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {Provider} from 'react-redux'
// import App from './App'
// import {store} from './app/store'
// import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('main'))

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import {store} from './app/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
