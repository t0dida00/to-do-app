import filtersReducer from "../components/Filters/FiltersSlice";
import TodoReducer from "../components/TodoList/TodoSlice";
import { combineReducers } from "redux";
// const rootReducer = (state ={} , action) => { 
//   return{
//     filters: filtersReducer(state.filters,action),
//     todoList:TodoSlice(state.todoList,action),

//   }
// };

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList:TodoReducer
})

export default rootReducer