import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoCardData } from '../datas/photocardData';
import { SET_PHOTOCARD_VIEW } from '../reducers/photocard';

const PhotoCardList = () => {
  const dispatch = useDispatch();
  const { photocards } = useSelector((state) => state.photocard);

  const onClickPhotoCardList = (idx) => {
    dispatch({
      type: SET_PHOTOCARD_VIEW,
      data: PhotoCardData(idx),
    });
  };

  return (
    <div className="photocard-content">
      <p className="text">
        Thank you for watching<br />
        all EXO XR Gallery videos!
      </p>
      <p className="text">
        Enjoy EXO member and group photos with<br />
        member’s autographs especially for EXO-Ls!
      </p>
      <div className="photocard-list">
        <p className="list-title">
          Select your EXO planet
        </p>
        <ul>
          {
            photocards.map(v => {
              return (
                <li className="list-item" data-num={v.idx} key={v.idx}>
                  <button type="button" className="inner" onClick={() => {onClickPhotoCardList(v.idx)}}>
                    <img src={v.thumb_src_off} className="img off" />
                    <img src={v.thumb_src_on} className="img on" />
                    <p className="name">{v.name}</p>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default PhotoCardList;