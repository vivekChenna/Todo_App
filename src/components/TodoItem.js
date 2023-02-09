const TodoItem = ({ todo, onDelete, index }) => {
  return (
    <div className="Todo-item">
      <div>
        <p>{index + 1}</p>
      </div>
      <div>
        <h2>{todo.title}</h2>
      </div>
      <div>
        <h2>{todo.description}</h2>
      </div>

      <div className="delete-btn">
        <button
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
