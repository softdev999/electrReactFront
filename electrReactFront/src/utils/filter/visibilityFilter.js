export const getVisibleTodos = (todos, bCompleted) => {
  if (bCompleted) {
    return todos.filter(t => t.isCompleted);
  } else {
    return todos;
  }
};
