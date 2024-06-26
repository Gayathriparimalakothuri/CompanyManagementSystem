import './App.css';
//import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Companylist from './components/companylist';
import Cmpyform  from './components/form'
import Info from './components/Info'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Create from './components/Create'

function App() {
  return (
    <div>
     
      <Routes>
        <Route path ='/' element={<Cmpyform/>}/>
        <Route path ='/companylist' element={ <Companylist/>}/>
        <Route path = '/info/:id' element={<Info/>}/>
        <Route path = '/edit/:id' element={<Edit/>}/>
        <Route path = '/delete/:id' element={<Delete/>}/>
        <Route path = '/create' element={<Create/>}/>


      </Routes>
    </div>
  );
}

export default App;
