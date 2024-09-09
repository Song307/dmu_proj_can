import './Home.css';
import AnimatedText from './Animate';
import React, { useEffect, useState} from 'react';
import Navigator from './Navigator_home/Navigator';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resImage from './resource1.PNG';



function Home(){
  // 컴포넌트가 마운트될 때 AOS 초기화
  useEffect(() => {
    AOS.init({                              // AOS 초기화
      duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
      once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
    });
  }, []);        
  
  const scrollToPosition = () => {
    window.scrollTo({
        top: 1000, // 고정된 스크롤 위치
        behavior: 'smooth' // 부드러운 스크롤 애니메이션
    });
};                     

    return(
        <div className='Home'>
          <Navigator/>
            <div className='title'>
            <AnimatedText text="CAN" />
            
            </div>
            
            
            
             <div className='header' data-aos="fade-up" data-aos-once='false'>

                <h2>컴퓨터소프트웨어학과 </h2>
                <h2>전공동아리 CAN</h2>
                <h1>We are CAN!</h1>
                
                <p>
                    CAN은 1988년 학부 최초로 결성되어 유지되고 있는 컴퓨터소프트웨어공학과 전공동아리입니다.
                    <br/>주요 학습 분야는 모바일 애플리케이션, 멀티미디어 관련 분야, 인터넷 응용분야, 컴퓨터 보안 및 Game 소프트웨어 제작 분야 등 컴퓨터공학 관련 기술 분야입니다.
                    <br/>컴퓨터 분야 및 ICT(정보통신기술) 기술뿐만 아니라, 참된 인성과 인문학적 융합 소양을 갖춘 동아리로서, 창립 이래 매년 자체 작품 발표를 진행하고 있습니다.
                    <br/>특히 많은 졸업생 선배와의 유대 관계와 면밀한 기술교류 등을 갖고 있고, 정기적으로 킨텍스 졸업작품전 참가와 외부 공모전 참여 등에 활발한 작품제작 활동을 하고 있습니다.
                    <br/>
                </p>
                
                <div className="scroll-arrow" onClick={scrollToPosition}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                    </svg>
                    </div>
             </div>

             <div className='overview'>
                <div className='res1'><img src={resImage}/></div>
                  <div className='overview_list' data-aos="fade-up" data-aos-once='false'>
                    <h1>STUDY</h1>
                    <div className='overview_list' data-aos="fade-up" data-aos-once='false'>
                     <p>
                        <br/>오랜시간 이어져 온 만큼, 다양한 프로젝트 경험 및 수상경력이 있으며 이러한 노하우를 바탕으로 하여 웹과 게임 소프트웨어 개발을 주요 분야로 활동하고 있습니다.
                        <br/>하고 싶은 활동이 있다면 가리지 않고 무엇이든지 할 수 있도록 최대한 돕고 함께하고 있으며,
                        <br/>동아리 활동인 만큼 다른 것보다 부원들이 서로에 대해 존중하며 활동하는 것을 중요하게 생각하고 있습니다.
                        <br/>
                     </p>
                    </div>
                    




                    <div data-aos="zoom-in" data-aos-once='false'> 
                        <div className='img_1'>
                         <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_01.png'/>
                         <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_03.png'/>
                         <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_04.png'/>
                    </div>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className='about_part' data-aos="fade-up" data-aos-once='false'>
                     <div className='partbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi bi-unity" viewBox="0 0 16 16">
                            <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z"/>
                        </svg>
                        <h1>GAME DEV</h1>
                     </div>
                     <div className='partbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z"/>
                        </svg>
                        <h1>WEB DEV</h1>
                     </div>
                    </div>



                  </div>
                </div>
             </div>
            

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             
        </div>
    )
    
}

export default Home;