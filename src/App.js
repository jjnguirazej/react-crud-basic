import './App.css';
import Create from './components/Create';
import Read from './components/read';
import Update from './components/update';
import { 
  BrowserRouter as Router,
   Routes,
  Route
 } from 'react-router-dom'
//  import { Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="main">
    <h2 className="main-header">React Crud Operations</h2>
    <div>
            {/* <Link exact to='/create' element={<Create/>}>   
              <button>Create</button>     
            </Link>

            <Link exact to='/update'>   
              <button>Update</button>     
            </Link>

            <Link exact to='/read'>   
              <button>Read</button>     
            </Link> */}
      <Routes>
        
       
    <Route path='/create' element={<Create/>} />
    
          <Route exact path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
    </Routes>
    </div>
  </div>
  </Router>
  );
}

export default App;