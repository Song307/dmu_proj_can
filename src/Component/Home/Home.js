import './Home.css';
import AnimatedText from './Animate';
import React, { useEffect, useState} from 'react';
import Navigator_home from './Navigator_home';
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
        top: 1100, // 고정된 스크롤 위치
        behavior: 'smooth' // 부드러운 스크롤 애니메이션
    });
};                     

    return(
        <div className='Home'>
          <Navigator_home/>
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
              <h1 className='o_title' data-aos="fade-left" data-aos-once='false'><span className='o_title_color'>C</span>REATIVE  </h1>
              <h1 className='o_title' data-aos="fade-right" data-aos-once='false'><span className='o_title_color'>A</span>PPLICATION </h1>
              <h1 className='o_title' data-aos="fade-left" data-aos-once='false'><span className='o_title_color'>N</span>ETWORK</h1>
              <h2 className='o_title_p' data-aos="fade-up" data-aos-once='false'>CAN은 개발을 통해 협력과 성장을 추구하는 커뮤니티입니다.</h2>
                
                
                <div className='res1'><img src={resImage}/></div>
                <div className='header'>
                <h1 className='' data-aos="fade-left" data-aos-once='false'>STUDY</h1>
                     <h3>
                        오랜시간 이어져 온 만큼, 다양한 프로젝트 경험 및 수상경력이 있으며
                        <br/>이러한 노하우를 바탕으로 하여 웹과 게임 소프트웨어 개발을 주요 분야로 활동하고 있습니다.
                        <br/>하고 싶은 활동이 있다면 가리지 않고 무엇이든지 할 수 있도록 최대한 돕고 함께하고 있으며,
                        <br/>동아리 활동인 만큼 다른 것보다 부원들이 서로에 대해 존중하며 활동하는 것을 중요하게 생각하고 있습니다.
                        <br/>
                     </h3>
                </div>



                  <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className='vision'> 
                      <h1 className='sub_title_h1' data-aos="fade-left" data-aos-once='false' >우리 동아리의 핵심은?</h1>
                        <div className='section'>
                          <div className='blocks' data-aos="fade-right" data-aos-once='false'>
                            <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_01.png'/>
                            <div>
                              <h1 className='sub_title_h2'>협력을 통한 성장 </h1>
                              <p>팀워크를 통해 서로의 아이디어와 기술을 결합하며, 더 나은 결과를 만들어갑니다. <br/>
                                협력적인 환경에서 문제를 해결하고, 함께 프로젝트를 완성해 나갑니다.<br/>
                                실제 개발 환경과 유사한 팀 프로젝트를 통해 실무 경험을 쌓고, 협업 능력을 키울 수 있습니다.
                              </p>
                            </div>
                         </div>

                         <div className='blocks_left' data-aos="fade-left" data-aos-once='false'>
                            <div>
                              <h1 className='sub_title_h2'>개발 커뮤니티 </h1>
                              <p>우리 동아리는 단순한 기술 학습을 넘어,<br/>
                                개발자들이 서로의 성장과 성공을 지원하는 따뜻한 커뮤니티입니다.<br/>
                                같은 목표를 가진 사람들과 네트워킹하며, 서로의 성장을 응원하고 지원합니다.
                                
                              </p>
                            </div>
                            <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_03.png'/>
                         </div>
                         <div className='blocks' data-aos="fade-right" data-aos-once='false'>
                         <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_04.png'/>
                            <div>
                              <h1 className='sub_title_h2'>튜터링을 통한 성장 가이드 제공</h1>
                              <p>동아리 내에서는 경험이 풍부한 회원들이 직접 후배나 동료들에게 기술적인 도움을 주는 튜터링 활동을 진행합니다. <br/>
                                튜터링은 개인의 기술적인 문제를 해결하거나 프로젝트를 진행하는 데 필요한 가이드를 제공하는 중요한 과정으로,<br/>
                                서로의 지식을 나누고 실력을 향상시킬 수 있는 기회를 제공합니다. <br/>
                              </p>
                            </div>
                         </div>                         
                    </div>

                    








                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h1>웹과 게임의 미래를 함께 디자인하다!</h1> <br/><br/>
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