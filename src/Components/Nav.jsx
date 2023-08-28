import { useState } from 'react';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
    
    </div>
  )
}

export default NavBar