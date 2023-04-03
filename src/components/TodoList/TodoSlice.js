const initState = 
    [
      { id: 1, name: "Learn ABC", completed: false, priority: "Medium" },
      { id: 2, name: "Learn CDE", completed: true, priority: "High" },
      { id: 3, name: "Learn EFG", completed: false, priority: "Medium" },
    ]
  
  
    const TodoReducer = (state = initState, action) => {
    
    switch (action.type) {
      case "todoList/addTodo":
        return [
            ...state,
          action.payload
          ]
          case "todoList/toggleTodoStatus":
            return state.map(todo =>todo.id === action.payload ? {...todo,completed:!todo.completed}: todo)
          
    
      default: {
          return state;
      }
    }
  };
  
  export default TodoReducer