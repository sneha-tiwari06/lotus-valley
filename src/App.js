import './App.css';
import About from './components/about';
import Events from './components/events';
import Nav from './components/nav';
import Navbar from './components/navbar';
import Vision from './components/vision';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Nav />
     <About />
     {/* <Vision /> */}
     <Events />

    </div>
  );
}

export default App;
