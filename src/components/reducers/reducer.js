
// reducer have state and action parameter , action is for checking action type
//and return new state

export const reducer = (state, action) => {
  //check for action type dispatched from dispatcher
  if (action.type === 'ADD_ITEM') {
    //take previous person fromo state and apply payload action from dispatcher
    const newItem = [...state.people, action.payload]
    console.log(action, state)
    return {
      //return old state, with new changes
      ...state,
      people: newItem,
      isModelOpen: true,
      modelContent: 'Item added'
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModelOpen: true,
      modelContent: 'Please Enter A Value'
    }
  }
  if (action.type === 'CLOSE_MODEL') {
    return { ...state, isModelOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    // filter out items whose id are not eqaual to onclicked item id and set new
    // state with removed items
    const newItem = state.people.filter(person => person.id !== action.payload)
    const newItem2 = state.people.filter(person => person.id === action.payload)
    return {
      ...state,
      people: newItem,
      isModelOpen: true,
      modelContent: `Item Removed ${newItem2.map(person => person.name)}`
    }
  }
  return state;
}
