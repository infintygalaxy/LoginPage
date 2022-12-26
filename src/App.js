
import { BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import NewUser from './components/NewUser'
import Admin from './components/Admin'

function App() {
  return <>
  <Router>
  
<Route path='/' exact> <HomePage/></Route>
<Route path='/admin' exact> <Admin/></Route>
<Route path='/newuser' exact> <NewUser/></Route>

  </Router>
 
  </>
}

export default App;
