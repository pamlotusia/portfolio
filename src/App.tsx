import { ThemeProvider } from "./context/ThemeProvider"
import { Main } from "./pages/Main/Main";
import "./styles/globals.css";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
