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
            top: 800, // 고정된 스크롤 위치
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
            <div className="scr" onClick={scrollToPosition}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                    </svg>
                    </div>

            <div className="header">
                <div className="header_block_left"  data-aos="fade-right" data-aos-once='false'>
                    <h1 >함께 성장하는 개발의 여정, 지금 시작하세요!</h1>
                    <h3>"다양한 프로젝트와 스터디를 통해 서로 배우고, <br/>함께 도전하며 성장할 수 있는 기회를 만나보세요."</h3>
                </div>
                
                <div className="header_block_right"  data-aos="fade-left" data-aos-once='false'>
                    <h1 >협력과 성장이 만나는 곳, 당신을 기다립니다!</h1>
                    <h3>"같은 목표를 향해 나아가는 사람들과의 협력 속에서 <br/>최고의 성과를 이뤄낼 수 있는 기회를 잡으세요."</h3>
                </div>
                
                <div className="header_block_left"  data-aos="fade-right" data-aos-once='false'>
                    <h1 >같이 배우고, 함께 나아가는 개발자들의 모임</h1>
                    <h3>"초보부터 전문가까지, 모두가 함께 배우고 <br/>도전하는 공간에서 당신의 개발 역량을 키워보세요."</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Recruit;