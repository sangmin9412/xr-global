import React, { useEffect, version } from 'react';
import Link from 'next/link';
import { path } from '/config/config';
import AppLayout from '../components/AppLayout';
import GalleryList from '../components/GalleryList';
import GalleryVideo from '../components/GalleryVideo';
import { useDispatch, useSelector } from 'react-redux';
import { SET_GALLERY_DATA, SET_CURRENT_VIDEO, SET_WATCH_VIDEOS, SET_COMPLETED } from '../reducers/gallery';
import { galleryDataFilter } from '../datas/galleryData';
import { getCookie } from '../cookie/cookie';

const gallery = () => {
  const dispatch = useDispatch();
  const { currentVideo, activeData, watchVideos, completed } = useSelector((state) => state.gallery);
  const { title, version, prev, next } = currentVideo;

  const onClickLandscapeButton = (idx) => {
    dispatch({
      type: SET_CURRENT_VIDEO,
      idx: idx,
    });
  }

  useEffect(() => {
    if (getCookie('watchVideos').length > 0) {
      // 쿠키에 시청했던 영상 데이터가 있을 경우
      const videos = getCookie('watchVideos').split(",").map(v => parseInt(v));
      dispatch({
        type: SET_WATCH_VIDEOS,
        data: videos,
      });

      dispatch({
        type: SET_GALLERY_DATA,
        data: galleryDataFilter(2),
        idx: 2,
      });

      dispatch({
        type: SET_CURRENT_VIDEO,
        idx: videos[videos.length-1],
      });
    } else {
      // 쿠키에 시청했던 영상 데이터가 없을 경우
      dispatch({
        type: SET_GALLERY_DATA,
        data: galleryDataFilter(2),
        idx: 2,
      });

      dispatch({
        type: SET_CURRENT_VIDEO,
        idx: 7
      });
    }
  }, []);

  useEffect(() => {
    // SET_WATCH_VIDEOS 실행시 watchVideos length와 activeData length 가 같을 경우
    if (!watchVideos.length > 0) return;
    if (watchVideos.length === activeData.length) {
      dispatch({
        type: SET_COMPLETED,
      });
    }
  }, [watchVideos]);

  return (
    <AppLayout className="gallery">
      <header className="header desktop">
        <div className="title">
          <img src={`${path}/images/gallery_logo.png`} alt="" />
        </div>
        <Link href={`/`} as={`${path}/`}><a className="btn-back"></a></Link>
        <Link href={`/photocard`} as={`${path}/photocard`}><a className={`btn-next-page ${completed ? 'active' : ''}`}></a></Link>
      </header>
      <header className="header portrait">
        <div className="title">
          <img src={`${path}/images/gallery_logo_m.png`} alt="" />
        </div>
        <Link href={`/`} as={`${path}/`}><a className="btn-back"></a></Link>
        <Link href={`/photocard`} as={`${path}/photocard`}><a className={`btn-next-page ${completed ? 'active' : ''}`}></a></Link>
      </header>
      <header className="header landscape">
        <div className="title">{`${title} ${version == 2 ? '(Ver.2)' : ''}`}</div>
        {prev ? <button type="button" className="btn-prev" onClick={() => {onClickLandscapeButton(prev.idx)}}>{`< ${prev.title}`}</button> : null}
        {next ? <button type="button" className="btn-next" onClick={() => {onClickLandscapeButton(next.idx)}}>{`${next.title} >`}</button> : null}
        {(!next && completed) ? <Link href={`/photocard`} as={`${path}/photocard`}><a className="btn-next">next ></a></Link> : null}
      </header>

      <div className="gallery-content">
        <GalleryVideo />
        <GalleryList />
      </div>
    </AppLayout>
  );
};

export default gallery;