import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Recruit from './Component/Recruit/Recruit';


function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/recruit' element={<Recruit/>}/>
                    <Route path='login' />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;