import logo from './logo.svg';
import './App.css';
import Header from'./component/Header';
import Home from'./Home';
import Footer from'./component/Footer';



//import Header from './Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     
     <Footer/>
    </div>
  );
}

export default App;
