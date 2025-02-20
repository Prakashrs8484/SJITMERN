import React from "react";
import About from './components/functionalComponents/About'
import Home from "./components/functionalComponents/Home"
import Form from "./components/functionalComponents/Form"
import Gallery from "./components/functionalComponents/Gallery"
import Skills from "./components/functionalComponents/Skills"
import {BrowserRouter ,Routes, Route,} from "react-router-dom"
import UseEffect from "./components/functionalComponents/UseEffect"
import UseState from "./components/functionalComponents/UseState"
import Login from "./components/functionalComponents/Login"
import SignUp from "./components/functionalComponents/SignUp";
import UseEffectAPI from "./components/functionalComponents/UseEffectAPI";
import UseRef from "./components/functionalComponents/UseRef";
import Navbar from "./components/functionalComponents/Navbar";  
import UseMemo from "./components/functionalComponents/UseMemo";
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