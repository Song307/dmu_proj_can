import React, { useState, useEffect } from 'react';
import './ScrollText.css';
import ImageGallery from './ImageGallery';

function ScrollText() {
  const [visible, setVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const info = document.getElementById('info');
      const rect = info.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // 스크롤 방향 감지
      if (scrollTop > lastScrollTop) {
        // 아래로 스크롤 시
        if (rect.top < window.innerHeight - 50) { // 요소가 화면 하단에서 100px 안에 있을 때
          setVisible(true);
        }
      } else {
        // 위로 스크롤 시
        if (rect.top >= window.innerHeight) { // 요소가 화면 하단에서 완전히 벗어나면
          setVisible(false);
        }
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // 페이지 상단에서 스크롤이 0보다 작을 수 없으므로
    };

    window.addEventListener('scroll', handleScroll);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`info ${visible ? 'visible' : 'hidden'}`} id="info">
    
      <ImageGallery />
      <h1>제목</h1>
      <p>설명하는 텍스트</p>
    </div>
  );
}

export default ScrollText;
