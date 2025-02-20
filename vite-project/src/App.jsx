import React from "react";
import About from "./components/FunctionalComponents/About"
import Home from "./components/FunctionalComponents/Home"
import Form from "./components/FunctionalComponents/Form"
import Gallery from "./components/FunctionalComponents/Gallery"
import Skills from "./components/FunctionalComponents/Skills"
import {BrowserRouter ,Routes, Route,} from "react-router-dom"
import UseEffect from "./components/FunctionalComponents/useEffect"
import UseState from "./components/FunctionalComponents/useState"
import Login from "./components/FunctionalComponents/Login"
import SignUp from "./components/FunctionalComponents/SignUp";
import UseEffectAPI from "./components/FunctionalComponents/useEffectAPI";
import UseRef from "./components/FunctionalComponents/UseRef";
import Navbar from "./components/FunctionalComponents/Navbar";  
import UseMemo from "./components/FunctionalComponents/useMemo";
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