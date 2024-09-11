import './Home.css';
import AnimatedText from './Animate';
import React, { useEffect, useState, useRef} from 'react';
import Navigator_home from './Navigator_home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resImage from './resource1.PNG';
import img1 from './img1.webp';
import img2 from './img2.webp';



function Home(){

  useEffect(() => {
    AOS.init({                              // AOS 초기화
      duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
      once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
    });
  }, []);        
  

const scrollToOverview = () => {
  const overviewSection = document.getElementById('overview');
  if (overviewSection) {
    overviewSection.scrollIntoView({
      behavior: 'smooth' // 부드러운 스크롤
    });
  }
};

const MarqueeText = () => {
  const pTag1 = useRef(null);
  const pTag2 = useRef(null);

  const textArr1 = 'Javascript HTML CSS Typescript Database Linux Javascript HTML CSS Typescript Database Linux'.split(' ');
  const textArr2 = 'Unity Game Figma Github C Python MySQL JAVA Unity Game Figma Github C Python MySQL JAVA '.split(' ');

  let count1 = 0;
  let count2 = 0;

  useEffect(() => {
    // DOM 요소가 렌더링됐는지 확인 후 실행
    if (pTag1.current && pTag2.current) {
      initTexts(pTag1.current, textArr1);
      initTexts(pTag2.current, textArr2);

      function initTexts(element, textArray) {
        textArray.push(...textArray); // 텍스트 배열을 두 배로 늘림
        element.innerText = ''; // 이전 텍스트 제거
        for (let i = 0; i < textArray.length; i++) {
          element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`; // 텍스트 추가
        }
      }

      function marqueeText(count, element, direction) {
        if (!element) return count; // element가 null인 경우 처리
        if (count > element.scrollWidth / 2) {
          element.style.transform = `translate3d(0, 0, 0)`;
          count = 0;
        }
        element.style.transform = `translate3d(${direction * count}px, 0, 0)`;
        return count;
      }

      function animate() {
        count1++;
        count2++;

        count1 = marqueeText(count1, pTag1.current, -1);
        count2 = marqueeText(count2, pTag2.current, 1);

        window.requestAnimationFrame(animate);
      }

      function scrollHandler() {
        count1 += 15;
        count2 += 15;
      }

      window.addEventListener('scroll', scrollHandler);
      animate();

      // Cleanup function to remove event listener when component is unmounted
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때만 실행

  return (
    <div>
      <div className="cover">
        <p className="first-parallel" ref={pTag1}></p>
      </div>
      <div className="cover">
        <p className="second-parallel" ref={pTag2}></p>
      </div>
    </div>
  );
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
                
                <div className="scroll-arrow" onClick={scrollToOverview}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                    </svg>
                    </div>
             </div>

            <div className='overview' id='overview'>
              <h1 className='o_title' data-aos="fade-left" data-aos-once='false'><span className='o_title_color'>C</span>REATIVE  </h1>
              <h1 className='o_title' data-aos="fade-right" data-aos-once='false'><span className='o_title_color'>A</span>PPLICATION </h1>
              <h1 className='o_title' data-aos="fade-left" data-aos-once='false'><span className='o_title_color'>N</span>ETWORK</h1>
              <h2 className='o_title_p' data-aos="fade-up" data-aos-once='false'>CAN은 개발을 통해 협력과 성장을 추구하는 커뮤니티입니다.</h2>
                
                  
                <div className='res1'><img src={resImage}/></div>
                <div className='header'>
                
                     <h3>
                        오랜시간 이어져 온 만큼, 다양한 프로젝트 경험 및 수상경력이 있으며
                        <br/>이러한 노하우를 바탕으로 하여 웹과 게임 소프트웨어 개발을 주요 분야로 활동하고 있습니다.
                        <br/>하고 싶은 활동이 있다면 가리지 않고 무엇이든지 할 수 있도록 최대한 돕고 함께하고 있으며,
                        <br/>동아리 활동인 만큼 다른 것보다 부원들이 서로에 대해 존중하며 활동하는 것을 중요하게 생각하고 있습니다.
                        <br/>
                     </h3>
                </div>
            </div>


            <div className='about'>
              <h1>CAN 어떤 경험을 할 수 있을까요?</h1>
              <div className='box_left' data-aos="fade-left" data-aos-once='false'>
                <div className='img_sec'></div>
                <div className='text_sec'>
                  <h3>#협업  #프로젝트  #공모전</h3>
                  <h2>협력을 통한 성장</h2>
                  <p>팀워크를 통해 서로의 아이디어와 기술을 결합하며, 더 나은 결과를 만들어갑니다. <br/>
                    협력적인 환경에서 문제를 해결하고, 함께 프로젝트를 완성해 나갑니다.<br/>
                    실제 개발 환경과 유사한 팀 프로젝트를 통해 실무 경험을 쌓고, 협업 능력을 키울 수 있습니다.
                  </p>
                </div>
              </div>
              <div className='box_right' data-aos="fade-right" data-aos-once='false'>
                <div className='text_sec'>
                <h3>#네트워크  #소통  #이벤트</h3>
                  <h2>개발 커뮤니티</h2>
                  <p>우리 동아리는 단순한 기술 학습을 넘어,<br/>
                     개발자들이 서로의 성장과 성공을 지원하는 따뜻한 커뮤니티입니다.<br/>
                     같은 목표를 가진 사람들과 네트워킹하며, 서로의 성장을 응원하고 지원합니다.
                  </p>
                </div>
                <div className='img_sec_right'></div>
              </div>
              <div className='box_left' data-aos="fade-left" data-aos-once='false'>
                <div className='img_sec'>d</div>
                <div className='text_sec'>
                <h3>#멘토링  #가이드 </h3>
                  <h2>튜터링을 통한 성장 가이드 제공</h2>
                  <p>동아리 내에서는 경험이 풍부한 회원들이 직접 후배나 동료들에게 기술적인 도움을 주는 튜터링 활동을 진행합니다. <br/>
                     튜터링은 개인의 기술적인 문제를 해결하거나 프로젝트를 진행하는 데 필요한 가이드를 제공하는 중요한 과정으로,<br/>
                     서로의 지식을 나누고 실력을 향상시킬 수 있는 기회를 제공합니다. <br/>
                  </p>
                </div>
              </div>
              

            </div>









            <div className='study' id='study' >
              <h1 data-aos="fade-up" data-aos-once='false'>TEAM</h1>
              <div className='block'>
                <div className='box' data-aos="fade-left" data-aos-once='false'>
                  <img src={img2}/> 
                  <h2>WEB DEV TEAM</h2>
                  <p>최신 웹 기술을 탐구하고, 실전 프로젝트를 통해 실력을 키워나가는 공간입니다. 협업을 통해 창의적인 웹 애플리케이션을 개발하며, 함께 성장하는 것을 목표로 합니다."</p>
                </div>
                <div className='box' data-aos="fade-left" data-aos-once='false'>
                  <img src={img1}/> 
                  <h2>GAME DEV TEAM</h2>
                  <p>"창의적인 게임 아이디어를 실현하고, 게임 디자인과 프로그래밍을 함께 배우는 곳입니다. 팀워크를 통해 게임을 기획하고 제작하며, 재미있고 도전적인 프로젝트에 도전합니다."</p>
                </div>
              </div>
              <h1>project</h1>
              
            </div>
            <div className='study'>
              <h1>DEVELOPMENT STACKS</h1>

            </div>







            <MarqueeText />
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             



        </div>
    )
    
}

export default Home;