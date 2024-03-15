let defoultCustomer = {
  todos: [],
};

export let todos = (state = defoultCustomer, actions) => {
  console.log(actions);
  switch (actions.type) {
    case "ADD":
      return { ...state, todos: [...state.todos, actions.todo] };

    default:
      return state;
  }
};
