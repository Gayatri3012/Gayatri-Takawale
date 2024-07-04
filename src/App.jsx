import { DarkModeContextProvider } from './context/DarkModeContext.jsx';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ModeToggleButton from "./components/ModeToggle";
import ContactInfo from './components/ContactInfo.jsx';

function App() {
    return (
        <DarkModeContextProvider>
           <ModeToggleButton/>
            <About />
            <Projects />
            <Skills />
            <ContactInfo />
        </DarkModeContextProvider>
    )
}

export default App;