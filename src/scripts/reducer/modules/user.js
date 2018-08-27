// Actions
const GET_USER_LIST = 'api/user/GET_USER_LIST';
const DEL_USER = 'api/user/DEL_USER';
const ADD_USER = 'api/user/ADD_USER';

// Reducer
const initialState = {
  list: ['tom', 'xiaoming']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        list: [].concat(state.list, getRandomName())
      };
    case DEL_USER:
      let list = state.list.filter((item, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        list: list
      };

    default:
      return state;
  }
};

// 获取关注列表
export function getFollowList(uid) {
  return {
    type: GET_USER_LIST,
    payload: 12
  };
}

// 添加关注
export function addUser() {
  return {
    type: ADD_USER,
    payload: 23
  };
}

// 删除关注
export function delUser(index) {
 
  return {
    type: DEL_USER,
    payload: index
  };
}

function getRandomName(len = 4) {
  let str = '';
  while (len--) str += String.fromCharCode(97 + Math.ceil(Math.random() * 25));
  return str;
}
