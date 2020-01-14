export default (state = {}, action) => {
    switch (action.type) {
     case 'ACTION_TYPE':
      return action.actionParameter
     default:
      return state
    }
   }