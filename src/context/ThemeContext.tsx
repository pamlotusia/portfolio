import { createContext, useEffect, useState, type ReactNode } from "react";
import lightTheme from './../styles/themes/light.module.css'
import darkTheme from './../styles/themes/dark.module.css';

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
   setTheme( prev => (prev === 'light' ? 'dark': 'light'))
  }

  useEffect(()=> {
  document.body.classList.remove(lightTheme.root, darkTheme.root);
  document.body.classList.add(theme === 'light'? lightTheme.root : darkTheme.root)
  }, [theme])

  return(
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
  )
};
