import './Home.css';
import AnimatedText from './Animate';
import React, { useEffect } from 'react';
import ScrollText from './ScrollText';
import './ScrollText.css';


function Home(){
    return(
        <div className='Home'>
             <AnimatedText text="CAN" />
             
             <div className='header'>
                <h2>컴퓨터소프트웨어학과 </h2>
                <h2>전공동아리 CAN</h2>
                <p>
                    CAN은 1988년 학부 최초로 결성된 컴퓨터공학 학술 동아리입니다.
                    <br/>주 요 학습 분야는 모바일 애플리케이션, 멀티미디어 관련 분야, 인터넷 응 용분야, 컴퓨터 보안 및 Game 소프트웨어 제작 분야 등 컴퓨터공학 관 련 기술 분야입니다.
                    <br/>현재 전문 동호인들이 다수 활동 중입니다.
                    <br/>컴퓨터 분야 및 ICT(정보통신기술) 기술뿐만 아니라, 참된 인성과 인문학적 융합 소양을 갖춘 동아리로서, 창립 이래 매년 자체 작품 발표를 진행하고 있습니다.
                    <br/>특히 많은 졸업생 선배와의 유대 관계와 면밀한 기술교류 등을 갖고 있고, 정기적으로 킨텍스 졸업작품전 참가와 외부 공모전 참여 등에 활발한 작품제작 활동을 하고 있습니다.
                </p>
                <p>
                    CAN은 1988년 학부 최초로 결성되어 유지되고 있는 컴퓨터소프트웨어공학과 전공동아리입니다.
                    <br/>오랜시간 이어져 온 만큼, 다양한 프로젝트 경험 및 수상경력이 있으며 이러한 노하우를 바탕으로 하여 웹과 게임 소프트웨어 개발을 주요 분야로 활동하고 있습니다.
                    <br/>하고 싶은 활동이 있다면 가리지 않고 무엇이든지 할 수 있도록 최대한 돕고 함께하고 있으며,
                    <br/>동아리 활동인 만큼 다른 것보다 부원들이 서로에 대해 존중하며 활동하는 것을 중요하게 생각하고 있습니다.
                </p>
             </div>

             <div className='img_1'>
                <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_01.png'/>
                 <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_03.png'/>
                 <img src='https://www.dongyang.ac.kr/sites/dmu_23222/images/dmu_23222_comm_04.png'/>
            </div>
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <div className="content">
             
                 <ScrollText />

             </div>
        </div>
    )
    
}

export default Home;