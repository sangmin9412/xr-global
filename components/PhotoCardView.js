import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const PhotoCardView = () => {
  const { photocardViewData } = useSelector((state) => state.photocard);
  const { idx, download_thumb_src, download_src } = photocardViewData;
  const randomRef = useRef(Math.floor(Math.random() * 3));
  
  return (
    <div className="download-content">
      <div className="download-img">
        <img src={download_thumb_src[randomRef.current]} />
      </div>
      <div className="button-wrap">
        <a href={download_src[randomRef.current]} className="download-btn" data-num={idx} download>
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default PhotoCardView;