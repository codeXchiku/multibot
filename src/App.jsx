
import './App.css'
import Setting from './Setting';
import MapBox from './component/MapBox'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './component/NavBar';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<MapBox/>}/>
      <Route path='/Setting' element={<Setting/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
