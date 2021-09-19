import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleryDataFilter } from '../datas/galleryData';
import { SET_GALLERY_DATA, SET_CURRENT_VIDEO } from '../reducers/gallery';

const GalleryList = () => {
  const dispatch = useDispatch();
  const { gallerys, galleryTabIndex, currentVideo, watchVideos }  = useSelector((state) => state.gallery);

  const onClickTabButton = (ver) => {
    dispatch({
      type: SET_GALLERY_DATA,
      data: galleryDataFilter(ver),
      idx: ver,
    });
  }

  const onClickListItem = (idx) => {
    dispatch({
      type: SET_CURRENT_VIDEO,
      idx: idx,
    });
  }
  
  return (
    <div className="gallery-list-wrap">
      <div className="tab-button">
        <div className="inner">
          <button type="button" className={`tab-btn ${galleryTabIndex === 0 ? 'active' : ''}`} onClick={() => {onClickTabButton(0)}}>
            <span>ALL</span>
          </button>
          <button type="button" className={`tab-btn ${galleryTabIndex === 1 ? 'active' : ''}`} onClick={() => {onClickTabButton(1)}}>
            <span>Ver.1</span>
          </button>
          <button type="button" className={`tab-btn ${galleryTabIndex === 2 ? 'active' : ''}`} onClick={() => {onClickTabButton(2)}}>
            <span>Ver.2</span>
          </button>
        </div>
      </div>
      <div className="gallery-list">
        {gallerys.map((v, i) => (
          <li 
            className={`list-item ${v.activate ? '' : 'disabled'} ${v.idx === currentVideo.idx ? 'active' : ''} ${watchVideos.includes(v.idx) ? 'checked' : ''}`} 
            data-video-title={v.title} 
            data-video-version={v.version} 
            key={v.title + i} 
            onClick={() => {onClickListItem(v.idx)}}
          >
            <div className="inner">
              <button type="button" className="item-button">
                <div className="f-box">
                  <div className="item-thumb"><img src={v.thumb_src} alt="" /></div>
                  <div className="item-info">
                    <div className="title">
                      {v.activate ? (<span className="version">Ver. {v.version}</span>) : null}
                      {v.title}
                    </div>
                    <div className="views">{v.views} views</div>
                  </div>
                </div>
              </button>
            </div>
          </li>
          ))
        }
      </div>
    </div>
  );
};

export default GalleryList;