import './App.css';
import Navi from  './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/api";

function App() {
  return (
    <div className="App">
     <Navi/>
    <Dashboard/>
     <Footer/>
    </div>
  );
}

export default App;
