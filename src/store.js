import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({ // useState와 비슷함
  name : 'user', // 작명
  initialState : {name : 'kim', age : 20}, // 초기값
  reducers : {
    changeName(state){
        state.name ='park'
    },
    changeAge(state, action){
        state.age += action.payload
    }
  }
})
export const {changeName,changeAge} = user.actions;

const stock = createSlice({ // useState와 비슷함
  name : 'stock',
  initialState : 
  [  
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      state.count += action.payload
      
    }
  }
})
export const { addCount } = stock.actions;

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
  }
}) 