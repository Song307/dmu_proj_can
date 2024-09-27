import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import ViewResume from "./Resume/ViewResume";
import UserManage from "./UserManage/UserManage";

import AOS from 'aos';
import 'aos/dist/aos.css';



function SelectMenu({ onSelectViewResume, onSelectUserManage }) {
    return (
        <div>
            <div className="block_section" >
                <div className="">
                    {/* 클릭 시 onSelectViewResume 호출 */}
                    <button className="block" onClick={onSelectViewResume} data-aos="fade-left" data-aos-once='true'  data-aos-easing="ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>
                        <p>지원서 조회</p>
                    </button>
                </div>
                <div className="">
                    {/* 클릭 시 onSelectUserManage 호출 */}
                    <button className="block" onClick={onSelectUserManage} data-aos="fade-left" data-aos-once='true'  data-aos-easing="ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                        </svg>
                        <p>멤버 관리</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

function AdminPage() {
    const [view, setView] = useState("menu");

    const showViewResume = () => setView("resume");
    const showUserManage = () => setView("manage");

    useEffect(() => {
        AOS.init({                              // AOS 초기화
          duration: 1000,                       // 애니메이션 지속 시간 설정 (1000ms = 1초)
          once: true,                           // 스크롤할 때 한 번만 애니메이션 실행
        });
      }, []);        

    return (
        <div className="AdminPage" >
            <h1 data-aos="fade-in" data-aos-once='true'  data-aos-easing="ease-in-out">관리자 페이지</h1>
            {view === "menu" ? (
                <SelectMenu onSelectViewResume={showViewResume} onSelectUserManage={showUserManage} />
            ) : view === "resume" ? (
                <ViewResume />
            ) : (
                <UserManage />
            )}
        </div>
    );
}

export default AdminPage;
