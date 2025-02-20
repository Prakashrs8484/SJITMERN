import React from "react";
import About from './Components/functionalComponents/About'
import Home from "./Components/functionalComponents/Home"
import Form from "./Components/functionalComponents/Form"
import Gallery from "./Components/functionalComponents/Gallery"
import Skills from "./Components/functionalComponents/Skills"
import {BrowserRouter ,Routes, Route,} from "react-router-dom"
import UseEffect from "./Components/functionalComponents/UseEffect"
import UseState from "./Components/functionalComponents/UseState"
import Login from "./Components/functionalComponents/Login"
import SignUp from "./Components/functionalComponents/SignUp";
import UseEffectAPI from "./Components/functionalComponents/UseEffectAPI";
import UseRef from "./Components/functionalComponents/UseRef";
import Navbar from "./Components/functionalComponents/Navbar";  
import UseMemo from "./Components/functionalComponents/UseMemo";
function App() {
  return (
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} properties="sjit" sjit="Hello" />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/UseState" element={<UseState />} />
            <Route path="/UseEffect" element={<UseEffect />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="use-effect-api" element={<UseEffectAPI/>}></Route>
            <Route path='/useRef' element={<UseRef/>}></Route>
            <Route path='/useMemo' element={<UseMemo/>}></Route>
          </Routes>
          </BrowserRouter>
      </main>
  )
}
export default App;