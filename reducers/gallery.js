import produce from '../util/produce';

export const initialState = {
  gallerys: [],
  galleryTabIndex: null,
  activeData: [],
  watchVideos: [],
  currentVideo: {},
  completed: false,
}

export const SET_GALLERY_DATA = 'SET_GALLERY_DATA';

export const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO';

export const SET_ACTIVE_DATA = 'SET_ACTIVE_DATA';

export const SET_WATCH_VIDEOS = 'SET_WATCH_VIDEOS';

export const SET_COMPLETED = 'SET_COMPLETED';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_GALLERY_DATA:
      draft.activeData = action.data.filter(v => v.activate);
      draft.gallerys = action.data;
      draft.galleryTabIndex = action.idx;
      break;
    case SET_CURRENT_VIDEO:
      let idx = null;
      let actionIdx = action.idx;
      if (!draft.watchVideos.includes(actionIdx)) {
        actionIdx = 7;
      }

      const obj = draft.gallerys.filter((v, i) => {
        if (v.idx === actionIdx) {
          idx = i
          return v;
        }
      })[0];

      obj.prev = null;
      obj.next = null;
      if (draft.gallerys[idx-1]) {
        obj.prev = {
          title: draft.gallerys[idx-1].title,
          idx: draft.gallerys[idx-1].idx,
        }
      }
      if (draft.gallerys[idx+1]) {
        obj.next = {
          title: draft.gallerys[idx+1].title,
          idx: draft.gallerys[idx+1].idx,
        }
      }
      draft.currentVideo = obj;
      break;
    case SET_ACTIVE_DATA:
      draft.activeData = drafe.gallerys.filter(v => v.activate);
      break;
    case SET_WATCH_VIDEOS:
      draft.watchVideos = action.data;
      break;
    case SET_COMPLETED:
      draft.completed = true;
      break;
    default:
      break;
  };
});

export default reducer;