import React from 'react';
import './ImageGallery.css'; // CSS 파일 임포트

const ImageGallery = () => {
  return (
    <div className="gallery">
      <div className="image-container">
        <img src="https://www.dongyang.ac.kr/sites/dmu_23222/atchmnfl_mngr/imageSlide/34/temp_1639101690513100.jpg" alt="Image 1" className="image" />
      </div>
      <div className="image-container">
        <img src="https://www.dongyang.ac.kr/sites/dmu_23222/atchmnfl_mngr/imageSlide/34/temp_1639101675391100.jpg" alt="Image 2" className="image" />
      </div>
      <div className="image-container">
        <img src="https://www.dongyang.ac.kr/sites/dmu_23222/atchmnfl_mngr/imageSlide/34/temp_1639545909029100.jpg" alt="Image 3" className="image" />
      </div>
    </div>
  );
}

export default ImageGallery;
