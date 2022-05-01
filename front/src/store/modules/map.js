/* 액션 타입 */
const SET_MAP = 'map/SET_MAP'



/* 액션 생성 함수 */
export const setMapObj = option => ({ type: SET_MAP, option })



/* 초기 상태 */
const initialState = {
  map: {}
}



/* 리듀서 */
const map = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return{
        ...state,
        option: action.option
      }
    default:
      return state
  }
}

export default map