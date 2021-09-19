import produce from '../util/produce';

export const initialState = {
  photocards: [],
  photocardViewData: {},
  photocardViewActivate: false,
}

export const SET_PHOTOCARD_DATA = 'SET_PHOTOCARD_DATA';

export const SET_PHOTOCARD_VIEW = 'SET_PHOTOCARD_VIEW';
export const SET_PHOTOCARD_VIEW_BACK = 'SET_PHOTOCARD_VIEW_BACK';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_PHOTOCARD_DATA:
      draft.photocards = action.data;
      draft.photocardViewActivate = false;
      break;
    case SET_PHOTOCARD_VIEW:
      draft.photocardViewData = action.data[0];
      draft.photocardViewActivate = true;
      break;
    case SET_PHOTOCARD_VIEW_BACK:
      draft.photocardViewActivate = false;
      break;
    default:
      break;
  };
});

export default reducer;