import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro />
      <Services />
    </div>
  );
}


export default App;
