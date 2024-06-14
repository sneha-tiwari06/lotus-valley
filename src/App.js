import './App.css';
import About from './components/about';
import Events from './components/events';
import Nav from './components/nav';
import Navbar from './components/navbar';
import StatsDisplay from './components/statsDisplay';
// import Vision from './components/vision';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Nav />
     
     <About />
     <StatsDisplay />
     {/* <Vision /> */}
     <Events />

    </div>
  );
}

export default App;
