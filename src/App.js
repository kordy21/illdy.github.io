import './App.css';
import About from './componants/About';
import ContactUs from './componants/ContactUs/ContactUs';
import Footer from './componants/Footer';
import Header from './componants/Header/Header';
import LastestNews from './componants/Latest News/LatestNews';
import Projects from './componants/Projects';
import Services from './componants/Services';
import Teams from './componants/Teams';
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
      <Teams />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
