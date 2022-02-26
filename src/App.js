import './App.css';
import Title from './components/Title';
import Content from './components/Content';
import Footer from './components/Footer';
import { createContext, useState } from 'react';


export const ThemeContext = createContext()

function App() {
  

  const [theme,setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div>
      <Title/>
      <Content/>
    </div>
    <Footer/>
    </ThemeContext.Provider>
  );
}

export default App;
