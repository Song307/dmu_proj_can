import './ViewResume.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ViewResume() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [selectedResume, setSelectedResume] = useState(null);
    const [viewMode, setViewMode] = useState("ui"); // "ui" for ResumeUiList, "list" for ResumeList_list

    const resume = [
        {
            Rid: 1,
            name: '송하성',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 2,
            name: '김주형',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 1,
            name: '송하성',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 2,
            name: '김주형',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 1,
            name: '송하성',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 2,
            name: '김주형',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 1,
            name: '송하성',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 2,
            name: '김주형',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 1,
            name: '송하성',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
        {
            Rid: 2,
            name: '김주형',
            studentNumber: 20212127,
            grade: 2,
            class: 'YD',
            reason: '동아리 활동 희망',
            interest: 'Web',
            github: '',
            call: '01012345678'
        },
    ];

    function viewDetail(selectedResumeData) {
        return (
            <div className='Resume_block'>
                <section className='resumeId'>
                    <p>지원서 ID: {selectedResumeData.Rid}</p>
                    <p className='btnClose' onClick={() => setSelectedResume(null)}>x</p> {/* Close button */}
                </section>
                <p>이름: {selectedResumeData.name}</p>
                <p>학번: {selectedResumeData.studentNumber}</p>
                <p>학년: {selectedResumeData.grade}</p>
                <p>반: {selectedResumeData.class}</p>
                <p>지원 이유: {selectedResumeData.reason}</p>
                <p>관심 분야: {selectedResumeData.interest}</p>
                <p>Github: {selectedResumeData.github ? selectedResumeData.github : '없음'}</p>
                <p>전화번호: {selectedResumeData.call ? selectedResumeData.call : '없음'}</p>
            </div>
        );
    }

    function ResumeList_list() {
        return (
            <div className='return_list'>
                <div className='title'>
                    <div className='id'>ID</div>
                    <div className='name'>NAME</div>
                    <div className='call'>CALL</div>
                </div>
                {resume.map((item) => (
                    <div className='item' key={item.Rid} onClick={() => setSelectedResume(item.Rid)}>
                        <div className='id'>{item.Rid}</div>
                        <div className='name'>{item.name}</div>
                        <div className='call'>{item.call}</div>
                    </div>
                ))}
            </div>
        );
    }


    function ResumeUiList() {
        return (
            <div className='ResumeUiList'>
                {resume.map((item) => (
                    <div
                        className='User_block'
                        key={item.Rid}
                        onClick={() => setSelectedResume(item.Rid)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <p>{item.Rid} {item.name}</p>
                    </div>
                ))}
            </div>
        );
    }
    

    const selectedResumeData = resume.find(item => item.Rid === selectedResume);

    return (
        <div className='ViewResume'>
            <h1>지원서 조회</h1>
            <div className='selectViewMethod'>
                <section className='viewUiMode' onClick={() => setViewMode("ui")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                </section>
                <section className='viewListMode' onClick={() => setViewMode("list")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                </section>
            </div>
            {viewMode === "ui" ? <ResumeUiList /> : <ResumeList_list />}
            
            {selectedResumeData && viewDetail(selectedResumeData)}
        </div>
    );
}

export default ViewResume;
