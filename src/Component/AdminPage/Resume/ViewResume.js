import './ViewResume.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ViewResume(){
    useEffect(() => {
        AOS.init({                              // AOS 초기화
          duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
          once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
        });
      }, []);  

    const resume =[
        {
            Rid : 1,
            name : '송하성',
            studentNumber : 20212127,
            grade : 2,
            class : 'YD',
            reason : '동아리 활동 희망',
            interest : 'Web',
            github : '',
        },
        {
            Rid : 2,
            name : '김주형',
            studentNumber : 20212127,
            grade : 2,
            class : 'YD',
            reason : '동아리 활동 희망',
            interest : 'Web',
            github : '',
        }
        
    ];

    function ResumeList(){
        return(
            <div className='User_block' data-aos="fade-left" data-aos-once='true'  data-aos-easing="ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <p>{resume[0].Rid} {resume[0].name}</p>
            </div>
        )
    }
    return(
        <div className='ViewResume'>
            <h1>지원서 조회</h1>
            <div className='ResumeList_section' > 
                <ResumeList/>
            </div>
            <div className='Resume_block'>
                <p>지원서 ID: {resume[0].Rid}</p>
                <p>이름: {resume[0].name}</p>
                <p>학번: {resume[0].studentNumber}</p>
                <p>학년: {resume[0].grade}</p>
                <p>반: {resume[0].class}</p>
                <p>지원 이유: {resume[0].reason}</p>
                <p>관심 분야: {resume[0].interest}</p>
                <p>Github: {resume[0].github ? resume[0].github : '없음'}</p>
            </div>
        </div>
    );
}

export default ViewResume;