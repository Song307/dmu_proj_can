import { useEffect } from 'react';
import './Recruit.css'
import Navigator_Recruit from './Navigator_Recruit/Navigator';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Recruit(){

    useEffect(() => {
        AOS.init({                              // AOS 초기화
          duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
          once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
        });
      }, []);   


    return(
        <div>
            <Navigator_Recruit/>
            <div className="Recruit" >
            <h2 data-aos="fade-right" data-aos-once='false'>Recruit</h2>
            <form className='form' data-aos="fade-right" data-aos-once='false'>
                <div className='form_list'> 이름 : <input type="text" placeholder="이름" className='form_text'/> </div>
                <div className='form_list'> 학년 : 1학년<input type="radio"/> </div>
                
                

            </form>
        </div>
        </div>
        
    )
}

export default Recruit;