import { useEffect } from 'react';
import './Recruit.css'
import Navigator_Recruit from './Navigator_Recruit';
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
            <form className='form' data-aos="fade-right" data-aos-once='true'>
                <div className='form_list'> 이름 <br/>
                    <input type="text" placeholder="이름" className='form_text'/>
                </div>
                <div className='form_list'> 학번 <br/>
                    <input type="text" placeholder="학번" className='form_text'/>
                </div>
                <div className='form_list'> 학년
                    <div className='form_input_list'>
                    <input className='radio_text' type="radio" name='g'/>1학년<br/>
                    <input className='radio_text' type="radio" name='g'/>2학년
                    </div>
                </div>
                <div className='form_list'> 분반<br/>
                    <div className='form_input_list'>
                        <input className='radio_text' type="radio" name='y'/>YA<br/>
                        <input className='radio_text' type="radio" name='y'/>YB<br/>
                        <input className='radio_text' type="radio" name='y'/>YC<br/>
                        <input className='radio_text' type="radio" name='y'/>YD
                    </div>
                </div>
                <div className='form_list'> 지원동기 <br/>
                <p>CAN 에 지원하게 된 동기와 함께 하고 싶은 활동이 있다면
                자유롭게 적어주세요</p>
                    <input type="text" placeholder="학번" className='form_text'/>
                </div>
                <div className='form_list'> 관심분야 <br/>
                    <input type="text" placeholder="학번" className='form_text'/>
                </div>
                
                <div className='Submit'>
                    <button className='Submit_buton'>제출하기</button>
                </div>

            </form>
        </div>
        </div>
        
    )
}

export default Recruit;