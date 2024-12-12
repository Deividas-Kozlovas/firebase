import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../header/Header'
import Works from '../works/Works'
import AddWork from '../addWork/AddWork'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Works/>}/>
        <Route path='/add-work' element={<AddWork/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
