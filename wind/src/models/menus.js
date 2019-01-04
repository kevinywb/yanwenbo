import service from '../utils/axios';

const serv = service;
export default {
  namespace: 'menus',
  state: [],
  reducers: {
    'all'(state, action) {
      const all = action.data;
      return { ...state, all };
    },
    'nav'(state, action) {
      const nav = action.data;
      return { ...state, nav };
    }
  },
  effects: {
    *getall({ }, { put, call }) {
      const data = yield call(() => {
        return serv.get('/menus').then(data => { return data })
      });
      yield put({ type: 'all', data: data });
    },
    *getnav({ }, { put, call }) {
      const data = yield call(() => {
        return serv.get('/menus/nav').then(data => { return data })
      });
      yield put({ type: 'nav', data: data });
    }
  }
};