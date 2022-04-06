import './App.css';

//import components
import HeroPage from './Hero/Hero';
import ProjectPage from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
     <HeroPage/>
     <ProjectPage/>
     <ContactMe/>
    </div>
  );
}

export default App;
