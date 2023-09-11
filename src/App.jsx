import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from "./Components/HomePage";
import Services from "./Components/Services";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true)

    const ToggleDarkMode = () =>{
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
  return (
    <div className={`h-full w-full mx-auto py-2 
    ${darkMode ? "dark" : ""}`}
    >
      <BrowserRouter>
      <Header darkMode={darkMode} 
      ToggleDarkMode={ToggleDarkMode} 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  )
}

export default App
