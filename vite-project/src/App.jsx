import React from "react";
import About from "./Components/FunctionalComponents/About"
import Home from "./Components/FunctionalComponents/Home"
import Form from "./Components/FunctionalComponents/Form"
import Gallery from "./Components/FunctionalComponents/Gallery"
import Skills from "./Components/FunctionalComponents/Skills"
import {BrowserRouter ,Routes, Route,} from "react-router-dom"
import UseEffect from "./Components/FunctionalComponents/UseEffect"
import UseState from "./Components/FunctionalComponents/UseState"
import Login from "./Components/FunctionalComponents/Login"
import SignUp from "./Components/FunctionalComponents/SignUp";
import UseEffectAPI from "./Components/FunctionalComponents/UseEffectAPI";
import UseRef from "./Components/FunctionalComponents/UseRef";
import Navbar from "./Components/FunctionalComponents/Navbar";  
import UseMemo from "./Components/FunctionalComponents/UseMemo";
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