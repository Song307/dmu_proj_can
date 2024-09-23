import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Recruit_form from './Component/Recruit/Recruit_form';
import Recruit from './Component/Recruit/Recruit';
import Login from './Component/Login/Login';
import AdminPage from './Component/AdminPage/AdminPage';

function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Recruit_form' element={<Recruit_form/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='Recruit' element={<Recruit/>} />
                    <Route path='adminPage' element={<AdminPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;