import React from "react";
import About from "./components/FunctionalComponents/About"
import Home from "./components/FunctionalComponents/home"
import Form from "./components/FunctionalComponents/Form"
import Gallery from "./components/FunctionalComponents/Gallery"
import Skills from "./components/FunctionalComponents/Skills"
import Navbar from "./components/FunctionalComponents/Navbar"
import {BrowserRouter ,Routes, Route,} from "react-router-dom";

function App() {
  return (
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} properties="sjit" sjit="Hello" />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
          </BrowserRouter>
         <Home properties="sjit" sjit="Hello"></Home><hr></hr>
         <About></About><hr></hr>
         <Form></Form><hr></hr>
         <Gallery></Gallery><hr></hr>
         <Skills></Skills><hr></hr>
         <Navbar></Navbar>
      </main>
  )
}
export default App;