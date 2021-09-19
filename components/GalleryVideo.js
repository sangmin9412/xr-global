import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, setCookie } from '../cookie/cookie';
import { SET_COMPLETED, SET_CURRENT_VIDEO, SET_WATCH_VIDEOS } from '../reducers/gallery';

const GalleryVideo = () => {
  const dispatch = useDispatch();
  const { activeData, currentVideo, watchVideos } = useSelector((state) => state.gallery);
  const [videoInfoActivate, setVideoInfoActivate] = useState(false);

  useEffect(() => {
    if (watchVideos.length > 0) {
      setCookie("watchVideos", watchVideos.join(), 1);
    }
  }, [watchVideos]);

  const onClickVideoInfo = () => {
    if (window.innerWidth <= 1024) {
      setVideoInfoActivate(prev => !prev);
    }
  }

  const onEndedVideo = (obj) => {
    const videos = [
      ...watchVideos
    ];
    const data = obj.idx;
    if (videos.includes(data)) {
      const idx = videos.indexOf(data);
      videos.splice(idx, 1);
    }
    videos.push(data);
    dispatch({
      type: SET_WATCH_VIDEOS,
      data: videos,
    });

    if (currentVideo.next) {
      dispatch({
        type: SET_CURRENT_VIDEO,
        idx: currentVideo.next.idx,
      });
    }

    let completed = true;
    activeData.forEach(v => {
      if (!videos.includes(v.idx)) completed = false;
    });
    if (completed) {
      dispatch({
        type: SET_COMPLETED,
      });
    }
  }

  return (
    <>
      <div className="gallery-video">
        <div className="video-wrap">
          <video id="video" type="video/mp4" src={currentVideo.src} controls controlsList="nodownload" playsInline autoPlay onEnded={() => {onEndedVideo(currentVideo)}}></video>
        </div>
        <div className={`video-info ${videoInfoActivate ? 'active' : null}`} onClick={onClickVideoInfo}>
          <div className="notice pc">※ Notice : You can find hidden rewards if you complete watching Version 2 videos!</div>
          <div className="title">
            {currentVideo.title}
          </div>
          <div className="views">
            {currentVideo.views} views
          </div>
          <div className="desc">
            {currentVideo.desc}
          </div>
        </div>
      </div>
      <div className="notice m">※ Notice : You can find hidden rewards if you complete watching Version 2 videos!</div>
    </>
  );
};

export default GalleryVideo;