// Actions
const GET_FOLLOW_LIST = "api/follow/GET_FOLLOW_LIST";
const DEL_FOLLOW = "api/follow/DEL_FOLLOW";
const ADD_FOLLOW = "api/follow/ADD_FOLLOW";

// Reducer
const initialState = {
  code: 0
};

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_FOLLOW:
      
      return {
        ...state,
        code: state.code+1
      };
    case DEL_FOLLOW:
      return {
        ...state,
        code: state.code-1
      };

    default:
      return state;
  }
};

// 获取关注列表
export function getFollowList(uid) {
  return {
    type: GET_FOLLOW_LIST,
    payload: 12
  };
}

// 添加关注
export function addFollow() {
  return {
    type: ADD_FOLLOW,
    payload: 23
  };
}

// 删除关注
export function delFollow() {
  return {
    type: DEL_FOLLOW,
    payload: 34
  };
}
