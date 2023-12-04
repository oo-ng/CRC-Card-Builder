
import { SetupPage } from './Pages/SetupPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { HelpPage } from './Pages/HelpPage';



function App
() {

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/help' element={<HelpPage/>}/>
        <Route path='/setup' element={<SetupPage/>}/>
      </Routes>
    </BrowserRouter>

    </>
    
    
  )
}

export default App
 