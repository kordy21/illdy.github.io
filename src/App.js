import './App.css';
import About from './componants/About';
import Header from './componants/Header/Header';
import LastestNews from './componants/Latest News/LatestNews';
import Projects from './componants/Projects';
import Services from './componants/Services';
import Testimonials from './componants/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Services />
      <LastestNews />
    </div>
  );
}

export default App;
