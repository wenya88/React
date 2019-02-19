import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import otherReducer from './reducer/otherReducer'

// 中间键
const middeware=[thunk]

//合并其他Reducer文件
const rootReducer=combineReducers({
    other:otherReducer
})
// 创建Store
export const store=createStore(rootReducer,{},applyMiddleware(...middeware));
