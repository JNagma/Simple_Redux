const initialState = ["Fathima", "Iliyas", "Anfa", "Siraj"];

const dataReducer = (state = initialState, action) => {
  return action.data || state;
};

export default dataReducer;
