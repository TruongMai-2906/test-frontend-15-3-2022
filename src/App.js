import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './pages/detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login></Login>}/>
          <Route exact path="/login" element={<Login></Login>}/>
          <Route exact path="/detail" element={<Detail></Detail>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
