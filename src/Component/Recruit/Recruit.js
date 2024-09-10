import Navigator_Recruit from "./Navigator_Recruit";
import { useEffect } from "react";
import './Recruit.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resImage from './resource1.PNG';



function Recruit(){
    useEffect(() => {
        AOS.init({                              // AOS 초기화
          duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
          once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
        });
      }, []);        
      
      const scrollToPosition = () => {
        window.scrollTo({
            top: 1100, // 고정된 스크롤 위치
            behavior: 'smooth' // 부드러운 스크롤 애니메이션
        });
    };    

    return(
        <div className="Recruit">
            <Navigator_Recruit/>
            <div className="title" data-aos="fade-up" data-aos-once='false'>
                <h1>WELCOME </h1>
                <h1>TO CAN!</h1>
                
                <h1>36.5기</h1>
            </div>
            
        </div>
    )
}

export default Recruit;