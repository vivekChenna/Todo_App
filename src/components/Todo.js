import Todoitem from "./TodoItem";
const Todo = ({ todoList, onDelete }) => {
  return (
    <div className="container">
      {todoList.length == 0 ? (
        <h2>No Todos to Display</h2>
      ) : (
        todoList.map((obj, index) => {
          return (
            <Todoitem
              key={index}
              todo={obj}
              index={index}
              onDelete={onDelete}
            />
          );
        })
      )}
    </div>
  );
};

export default Todo;
