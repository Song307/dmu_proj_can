import './Login.css'
import { useEffect } from 'react';
import Navigator_Login from './Navigator_Login';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login(){
    useEffect(() => {
        AOS.init({                              // AOS 초기화
          duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
          once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
        });
      }, []);        
      

    return(
        <div>
            <Navigator_Login/>
            <div className="Login" >
                <div className='box' data-aos="fade-up" data-aos-once='false'>

                    <h1 data-aos="fade-right" data-aos-once='false'> LOGIN</h1>

                    <div className='input_box'me data-aos="fade-left" data-aos-once='false'>
                        <h3>USERNAME</h3>
                        <input type='text' placeholder='ID'></input><br/><br/>
                    </div>

                    <div className='input_box' data-aos="fade-right" data-aos-once='false'>
                        <h3>PASSWORD</h3>
                        <input type='password' placeholder='Password'></input> <br/>
                    </div>

                    <div className='option_box'>
                        <a href='#' className='register'>회원가입✔</a>
                        <a href='#' className='findPW'>ID/PW 찾기✔</a>
                    </div>
                    
                    
                    <button className="btn-hover color-8">로그인</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Login;