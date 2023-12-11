import './App.css';
import AllRoutes from '../src/Routes/AllRoutes'

import Navbar from '../src/Routes/Navbar'
import Footer from './Routes/Footer';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
