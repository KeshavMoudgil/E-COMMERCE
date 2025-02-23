
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import SignUp from './components/auth/singUp'
import Login from './components/auth/login'


function App() {


  return (
    <>
    <BrowserRouter>
     <Nav />
      <Routes>
      
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
