import { DarkModeContextProvider } from './context/DarkModeContext.jsx';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactInfo from './components/ContactInfo.jsx';
import ParticlesBackground from './components/ParticleBackground.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import HomePage from './components/Home.jsx';


function App() {
    return (
        <DarkModeContextProvider>
            <NavigationBar />
            <ParticlesBackground />
            <HomePage />
            <Projects />
            <Skills />
            <ContactInfo />
        </DarkModeContextProvider>
    )
}

export default App;