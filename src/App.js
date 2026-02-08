import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes , Route} from "react-router-dom"
import Navs from './component/Navbar/Navs';
import Login from './component/Login';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Payment from './component/Payment';
import Orders from './component/Orders';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navs/>
            <Home/>
          </>
        }/>
        <Route path='/checkout' element={
          <>
            <Navs/>
            <Checkout/>
          </>
        }/>
        <Route path="/Payment" element={
          <>
            <Navs/>
            <Payment/>
          </>
        }/>
        <Route path="/Orders" element={
          <>
            <Navs/>
            <Orders/>
          </>
      }/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<h1>page Not found</h1>}/>
     </Routes>
    </div>
    
  );
}

export default App;
