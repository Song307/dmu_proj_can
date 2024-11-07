import './ViewResume.css';
import { useState, useEffect, useRef } from 'react';
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
    const [viewMode, setViewMode] = useState("ui");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [filteredResumes, setFilteredResumes] = useState([]);
    const itemsPerPage = 10;
    const inputRef = useRef(null);
    const selectedResumeRef = useRef(null); // 선택된 resume의 요소를 참조하기 위한 ref


    const resume = [
        { Rid: 101, name: '송하성', studentNumber: 20212127, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Web', github: '', call: '01012345678' },
        { Rid: 102, name: '김주형', studentNumber: 20212127, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Web', github: '', call: '01012345678' },
        { Rid: 103, name: '이수민', studentNumber: 20212128, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'App', github: '', call: '01022334455' },
        { Rid: 104, name: '박철민', studentNumber: 20212129, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Game', github: '', call: '01033445566' },
        { Rid: 105, name: '정다연', studentNumber: 20212130, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'AI', github: '', call: '01044556677' },
        { Rid: 106, name: '최진우', studentNumber: 20212131, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Web', github: '', call: '01055667788' },
        { Rid: 107, name: '홍승연', studentNumber: 20212132, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Data Science', github: '', call: '01066778899' },
        { Rid: 108, name: '김미소', studentNumber: 20212133, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Design', github: '', call: '01077889900' },
        { Rid: 109, name: '이진호', studentNumber: 20212134, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Cyber Security', github: '', call: '01088990011' },
        { Rid: 110, name: '박상민', studentNumber: 20212135, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Cloud', github: '', call: '01099001122' },
        { Rid: 111, name: '오지훈', studentNumber: 20212136, grade: 2, class: 'YD', reason: '동아리 활동 희망', interest: 'Blockchain', github: '', call: '01010223344' },
    ];

    useEffect(() => {
        setFilteredResumes(resume); // 초기 filteredResumes를 전체 resume 목록으로 설정
    }, []);

    const totalPages = Math.ceil(filteredResumes.length / itemsPerPage);
    const currentItems = filteredResumes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const selectedResumeData = resume.find(item => item.Rid === selectedResume);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    
    const handleSearch = () => {
        if (inputRef.current) {
            const query = inputRef.current.value;
            setSearchQuery(query);  

            const filtered = resume.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResumes(filtered);
            setCurrentPage(1); // 검색 시 페이지를 첫 페이지로 초기화
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); // Enter 키를 누르면 검색
        }
    };

    
    function ResumeList_list() {
        return (    
            <div className='return_list'>
                <div className='searchWrapper'>
                    <input
                        ref={inputRef} // useRef로 input 참조
                        placeholder='이름으로 검색'
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </div>
                <div className='title'>
                    <div className='id'>ID</div>
                    <div className='name'>NAME</div>
                    <div className='call'>CALL</div>
                </div>
                {currentItems.map((item) => (
                    <div className='item' key={item.Rid} onClick={() => setSelectedResume(item.Rid)}>
                        <div className='id'>{item.Rid}</div>
                        <div className='name'>{item.name}</div>
                        <div className='call'>{item.call}</div>
                    </div>
                ))}
                <div className='page'>
                    <p className='btn_page' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>⬅️</p>
                    <span>{currentPage} / {totalPages}</span>
                    <p className='btn_page' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>➡️</p>
                </div>
            </div>
        );
    }

    function viewDetail(selectedResumeData) {
        return (
            <div className='Resume_block'>
                <section className='resumeId'>
                    <p>지원서 ID: {selectedResumeData.Rid}</p>
                    <p className='btnClose' onClick={() => setSelectedResume(null)}>x</p>
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

    return (
        <div className='ViewResume'>
            <div className='ViewResume_block'>
                <h1 className='h1'>지원서 조회</h1>
                <div className='selectViewMethod'>
                    <section className='viewUiMode' onClick={() => setViewMode("ui")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </section>
                    <section className='viewListMode' onClick={() => setViewMode("list")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </section>
                </div>

                {viewMode === "ui" ?  <ResumeList_list /> : <ResumeUiList />}
                {selectedResumeData && viewDetail(selectedResumeData)}
            </div>
        </div>
    );
}

export default ViewResume;
