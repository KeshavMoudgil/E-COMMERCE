
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import About from './components/seller/seller'
import SignUp from './components/signUp/singUp'


function App() {


  return (
    <>
    <BrowserRouter>
     <Nav />
     <Routes>
      <Route path='/' element={<div>HOME PAGE</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/signUp" element={<SignUp />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
