import * as types from './types';
export default {
    [types.SET_DATALIST]:(state,data) => {
        state.dataList.push(data);
    }
}
