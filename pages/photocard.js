import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { path } from '/config/config';
import PhotoCardList from '../components/PhotoCardList';
import PhotoCardView from '../components/PhotoCardView';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PHOTOCARD_DATA, SET_PHOTOCARD_VIEW_BACK } from '../reducers/photocard';
import { PhotoCardData } from '../datas/photocardData';

const photocard = () => {
  const dispatch = useDispatch();
  const [soundState, setSoundState] = useState(false);
  const { photocardViewActivate } = useSelector((state) => state.photocard);
  const soundRef = useRef(null);

  const onClickModal = (e) => {
    if (e.target == e.currentTarget) {
      setSoundState(true);
      e.currentTarget.classList.remove('active');
    }
  }

  const onClickSoundButton = () => {
    setSoundState(prev => !prev);
  }

  const onClickBack = () => {
    dispatch({
      type: SET_PHOTOCARD_VIEW_BACK,
    })
  }

  useEffect(() => {
    dispatch({
      type: SET_PHOTOCARD_DATA,
      data: PhotoCardData(),
    });
  }, []);

  useEffect(() => {
    if (soundState) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  }, [soundState]);


  
  return (
    <>
      <audio ref={soundRef} src={`${path}/sound/photocard_sound.mp3`}></audio>

      <AppLayout className="photocard">
        <header className="header common">
          {
            photocardViewActivate ? <button type="button" className="btn-back" onClick={onClickBack}></button> : <Link href={`/gallery`} as={`${path}/gallery`}><a className="btn-back"></a></Link>
          }
          <button type="button" className={`btn-sound ${soundState ? 'active': ''}`} onClick={onClickSoundButton}></button>
        </header>
        <div className="photocard-wrap">
          { photocardViewActivate ? <PhotoCardView /> : <PhotoCardList /> }
        </div>
      </AppLayout>

      <div className={`modal-wrap active`} data-modal="f" data-modal-type="alert" onClick={onClickModal}>
        <div className="modal-body">
          <div className="modal-content">
            <p className="text">
              Now playing : '지켜줄게(Just as usual) - EXO'<br />
              <br />
              To turn off the music,<br />
              press the speaker button
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default photocard;