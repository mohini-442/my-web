import logo from './logo.svg';
import './App.css';
import Navsec from './components/Navsec';
import Firstsection from './components/Firstsection';
import Secondsection from './components/Secondsection';
import Slidersection from './components/Slidersection';
import Thirdsection from './components/Thirdsection';
import Formsection from './components/Formsection';
import Footersection from './components/Footersection'

function App() {
  return (
    <div className="App">
      <Navsec />
      <Firstsection />
      <Secondsection />
      <Slidersection />
      <Thirdsection />
      <Formsection />
      <Footersection />
      

    </div>
  );
}

export default App;
