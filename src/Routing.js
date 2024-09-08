import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';

function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Recruit' />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;