import React from 'react'
import Todos from './components/Todos.jsx'
import AddTodo from './components/AddTodo.jsx'
import {Provider} from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
    <div>Todos using Redux Toolkit</div>
    <AddTodo/>
    <Todos/>
    </Provider>
  )
}

export default App