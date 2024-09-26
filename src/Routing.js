import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Recruit_form from './Component/Recruit/Recruit_form';
import Recruit from './Component/Recruit/Recruit';
import Login from './Component/Login/Login';
import AdminPage from './Component/AdminPage/AdminPage';
import ViewResume from './Component/AdminPage/Resume/ViewResume';
import UserManage from './Component/AdminPage/UserManage/UserManage';  

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
                        <Route path='adminPage/viewResume' element={<ViewResume/>}/>
                        <Route path='adminPage/userManage' element={<UserManage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;