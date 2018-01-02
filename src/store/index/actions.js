import * as types from './types';

export default {
    setDataList({commit},data) {
        commit(types.SET_DATALIST,data);
    }
}
